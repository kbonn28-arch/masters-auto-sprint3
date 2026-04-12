import React, { useState, useMemo } from "react";

const PRICING = {
  sedan: 0,
  suv: 0,
  truck: 0,
  xl: 0,
};

const ADD_ONS = [
  { id: "engine", name: "Engine Bay Detail", price: 0 },
  { id: "pet", name: "Pet Hair Removal", price: 0 },
  { id: "headlight", name: "Headlight Restoration", price: 0 },
];

function SuccessPage() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1>Deposit Paid Successfully</h1>
        <p>Your payment went through. Masters Auto will follow up with your appointment details.</p>
        <a href="/" style={buttonLinkStyle}>Back to Booking</a>
      </div>
    </div>
  );
}

function CancelPage() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1>Payment Canceled</h1>
        <p>No payment was made. You can return and try again.</p>
        <a href="/" style={buttonLinkStyle}>Return to Booking</a>
      </div>
    </div>
  );
}

function BookingPage() {
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    vehicleSize: "sedan",
  });

  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const totalPrice = useMemo(() => {
    const base = PRICING[form.vehicleSize] || 0;
    const addOnsTotal = selectedAddOns.reduce((sum, item) => sum + item.price, 0);
    return base + addOnsTotal;
  }, [form.vehicleSize, selectedAddOns]);

  const depositAmount = useMemo(() => {
    if (totalPrice <= 0) return 0;
    return Math.max(50, Math.round(totalPrice * 0.3));
  }, [totalPrice]);

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prev) => {
      const exists = prev.some((a) => a.id === addOn.id);
      if (exists) {
        return prev.filter((a) => a.id !== addOn.id);
      }
      return [...prev, addOn];
    });
  };

  const handlePayment = async () => {
    if (!form.customerName.trim() || !form.customerEmail.trim()) {
      alert("Please enter your name and email.");
      return;
    }

    if (totalPrice <= 0) {
      alert("Please update the pricing values in App.js first.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/payments/create-booking-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingId: `bk_${Date.now()}`,
          customerName: form.customerName,
          customerEmail: form.customerEmail,
          serviceName: "Full Detail",
          vehicleSize: form.vehicleSize,
          addOns: selectedAddOns,
          totalPrice,
          depositAmount,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Error starting payment");
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: "560px", width: "100%" }}>
        <h1 style={{ marginBottom: "24px" }}>Masters Auto Booking</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={form.customerName}
          onChange={(e) => setForm({ ...form, customerName: e.target.value })}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          value={form.customerEmail}
          onChange={(e) => setForm({ ...form, customerEmail: e.target.value })}
          style={inputStyle}
        />

        <select
          value={form.vehicleSize}
          onChange={(e) => setForm({ ...form, vehicleSize: e.target.value })}
          style={inputStyle}
        >
          <option value="sedan">Sedan (${PRICING.sedan})</option>
          <option value="suv">SUV (${PRICING.suv})</option>
          <option value="truck">Truck (${PRICING.truck})</option>
          <option value="xl">XL / Tahoe (${PRICING.xl})</option>
        </select>

        <h3 style={{ marginTop: "24px", marginBottom: "14px" }}>Add-ons</h3>

        {ADD_ONS.map((addOn) => (
          <label key={addOn.id} style={checkboxRowStyle}>
            <input
              type="checkbox"
              checked={selectedAddOns.some((a) => a.id === addOn.id)}
              onChange={() => toggleAddOn(addOn)}
            />
            <span>{addOn.name} (+${addOn.price})</span>
          </label>
        ))}

        <div style={{ marginTop: "28px", marginBottom: "28px" }}>
          <h2 style={{ marginBottom: "8px" }}>Total: ${totalPrice}</h2>
          <p style={{ fontSize: "18px", margin: 0 }}>Deposit Due Today: ${depositAmount}</p>
        </div>

        <button onClick={handlePayment} style={buttonStyle}>
          Book & Pay Deposit
        </button>
      </div>
    </div>
  );
}

function App() {
  const path = window.location.pathname;

  if (path === "/success") return <SuccessPage />;
  if (path === "/cancel") return <CancelPage />;
  return <BookingPage />;
}

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#000",
  color: "#fff",
  padding: "40px",
  fontFamily: "Arial, sans-serif",
};

const cardStyle = {
  maxWidth: "600px",
  margin: "80px auto",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  marginBottom: "14px",
  padding: "14px",
  fontSize: "18px",
  color: "#111",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxSizing: "border-box",
};

const checkboxRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "12px",
  fontSize: "18px",
  cursor: "pointer",
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  backgroundColor: "#ff1a1a",
  color: "#fff",
  fontSize: "22px",
  fontWeight: "700",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const buttonLinkStyle = {
  display: "inline-block",
  padding: "14px 28px",
  backgroundColor: "#ff1a1a",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "700",
  marginTop: "12px",
};

export default App; 