require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();
const PORT = process.env.PORT || 5001;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  maxNetworkRetries: 0,
  timeout: 30000,
});

app.use(
  cors({
    origin: true, // allow ALL origins temporarily
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Masters Auto backend is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Server is running" });
});
app.get("/api/test-stripe", async (req, res) => {
  try {
    const balance = await stripe.balance.retrieve();
    res.json({ success: true, balance });
  } catch (err) {
    console.error("STRIPE TEST ERROR message:", err.message);
    console.error("STRIPE TEST ERROR type:", err.type);
    console.error("STRIPE TEST ERROR code:", err.code);
    console.error("STRIPE TEST ERROR statusCode:", err.statusCode);
    console.error("STRIPE TEST ERROR requestId:", err.requestId);
    console.error("STRIPE TEST ERROR raw:", err.raw);
    console.error("STRIPE TEST ERROR stack:", err.stack);

    res.status(500).json({
      error: err.message,
      type: err.type,
      code: err.code,
      statusCode: err.statusCode,
    });
  }
});
app.get("/api/test-stripe", async (req, res) => {
  try {
    const balance = await stripe.balance.retrieve();
    res.json({ success: true, balance });
  } catch (err) {
    console.error("STRIPE TEST ERROR:", err);
    res.status(500).json({
      error: err.message,
      type: err.type,
    });
  }
});
app.post("/api/payments/create-booking-checkout", async (req, res) => {
  try {
    console.log("Payment route hit");
    console.log("Stripe key exists:", !!process.env.STRIPE_SECRET_KEY);
    console.log("CLIENT_URL:", process.env.CLIENT_URL);
    console.log("Request body:", req.body);

    const {
      bookingId,
      customerEmail,
      serviceName,
      vehicleSize,
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
    console.error("FULL STRIPE ERROR:");
    console.error("message:", error.message);
    console.error("type:", error.type);
    console.error("code:", error.code);
    console.error("statusCode:", error.statusCode);
    console.error("requestId:", error.requestId);
    console.error("raw:", error.raw);
    console.error("stack:", error.stack);

    res.status(500).json({
      error: error.message || "Stripe checkout failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});