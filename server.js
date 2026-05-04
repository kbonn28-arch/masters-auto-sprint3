require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = process.env.PORT || 5001;

// Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  maxNetworkRetries: 0,
  timeout: 30000,
});

// Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Masters Auto backend is running" });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Server is running" });
});

// Test Stripe connection
app.get("/api/test-stripe", async (req, res) => {
  try {
    const balance = await stripe.balance.retrieve();
    res.json({ success: true, balance });
  } catch (err) {
    console.error("STRIPE TEST ERROR:", err.message);

    res.status(500).json({
      success: false,
      error: err.message,
      type: err.type,
      code: err.code,
    });
  }
});

// Get pricing from Supabase
app.get("/api/pricing", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("pricing")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error("GET PRICING ERROR:", err.message);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Save pricing to Supabase
app.post("/api/pricing", async (req, res) => {
  try {
    const pricing = req.body;

    if (!Array.isArray(pricing)) {
      return res.status(400).json({
        success: false,
        error: "Pricing data must be an array.",
      });
    }

    const rows = pricing.map((item) => ({
      vehicle_size: item.vehicle_size || item.size,
      basic_price: Number(item.basic_price || item.basic),
      full_price: Number(item.full_price || item.full),
    }));

    const { data, error } = await supabase
      .from("pricing")
      .upsert(rows, { onConflict: "vehicle_size" })
      .select();

    if (error) throw error;

    res.json({
      success: true,
      message: "Pricing saved successfully.",
      data,
    });
  } catch (err) {
    console.error("SAVE PRICING ERROR:", err.message);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Create Stripe checkout session for booking deposit
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

    const finalDepositAmount = depositAmount || 50;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${serviceName || "Booking"} Deposit`,
              description: `${vehicleSize || "Vehicle"} | Booking ID: ${
                bookingId || "N/A"
              }`,
            },
            unit_amount: finalDepositAmount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.error("FULL STRIPE ERROR:", error.message);

    res.status(500).json({
      success: false,
      error: error.message || "Stripe checkout failed",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});