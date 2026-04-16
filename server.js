require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();
const PORT = process.env.PORT || 5001;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Masters Auto backend is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Server is running" });
});

app.post("/api/payments/create-booking-checkout", async (req, res) => {
  try {
    console.log("Payment route hit");
    console.log("Stripe key exists:", !!process.env.STRIPE_SECRET_KEY);
    console.log("Request body:", req.body);

    const {
      bookingId,
      customerName,
      customerEmail,
      serviceName,
      vehicleSize,
      addOns,
      totalPrice,
      depositAmount,
    } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${serviceName} Deposit`,
              description: `${vehicleSize} | Booking ID: ${bookingId}`,
            },
            unit_amount: depositAmount * 100,
          },
          quantity: 1,
        },
      ],
     success_url: `${process.env.CLIENT_URL}/success`,
cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error.message);
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});