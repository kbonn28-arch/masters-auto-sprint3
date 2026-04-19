import React, { useMemo, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meepbqgd";
const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/test_14A28sdY36PU7tmc3t4wM00";

const vehiclePrices = {
  sedan: 120,
  suv: 160,
  truck: 180,
  xlarge: 220,
};

const vehicleLabels = {
  sedan: "Sedan",
  suv: "SUV",
  truck: "Truck",
  xlarge: "Extra Large SUV / Van",
};

const addOnPrices = {
  engineBay: 40,
  petHair: 35,
  headlight: 60,
};

const addOnLabels = {
  engineBay: "Engine Bay Detail",
  petHair: "Pet Hair Removal",
  headlight: "Headlight Restoration",
};

export default function Pricing() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("sedan");
  const [selectedAddOns, setSelectedAddOns] = useState({
    engineBay: false,
    petHair: false,
    headlight: false,
  });
  const [loading, setLoading] = useState(false);

  const basePrice = vehiclePrices[vehicle] || 0;

  const addOnTotal = useMemo(() => {
    return Object.entries(selectedAddOns).reduce((total, [key, selected]) => {
      return selected ? total + addOnPrices[key] : total;
    }, 0);
  }, [selectedAddOns]);

  const selectedAddOnNames = useMemo(() => {
    return Object.entries(selectedAddOns)
      .filter(([, selected]) => selected)
      .map(([key]) => addOnLabels[key]);
  }, [selectedAddOns]);

  const total = basePrice + addOnTotal;
  const deposit = total > 0 ? Math.max(50, Math.round(total * 0.3)) : 0;

  const handleAddOnChange = (key) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill out your name, email, and phone number.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        customerName: fullName,
        email,
        phone,
        vehicleType: vehicle,
        vehicleLabel: vehicleLabels[vehicle],
        selectedAddOns: selectedAddOnNames.join(", ") || "None",
        estimatedTotal: total,
        depositDueToday: deposit,
        bookingSource: "Website booking form",
        paymentStatus: "Stripe checkout started",
        _subject: `New Booking Deposit Lead - ${fullName}`,
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      window.location.href = STRIPE_CHECKOUT_URL;
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("There was a problem saving your booking details. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <div style={headerCardStyle}>
          <p style={eyebrowStyle}>Book Your Detail</p>
          <h2 style={titleStyle}>Reserve your appointment and pay your deposit online.</h2>
          <p style={subtitleStyle}>
            Choose your vehicle size, add any extras, and continue to secure checkout.
          </p>
        </div>

        <form onSubmit={handleBooking} style={formCardStyle}>
          <div style={gridStyle}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
            />

            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              style={inputStyle}
            >
              <option value="sedan">Sedan (${vehiclePrices.sedan})</option>
              <option value="suv">SUV (${vehiclePrices.suv})</option>
              <option value="truck">Truck (${vehiclePrices.truck})</option>
              <option value="xlarge">Extra Large SUV / Van (${vehiclePrices.xlarge})</option>
            </select>
          </div>

          <div style={{ marginTop: "36px" }}>
            <h3 style={sectionTitleStyle}>Add-ons</h3>

            <div style={addonGridStyle}>
              <label style={addonCardStyle}>
                <input
                  type="checkbox"
                  checked={selectedAddOns.engineBay}
                  onChange={() => handleAddOnChange("engineBay")}
                  style={checkboxStyle}
                />
                <span>Engine Bay Detail (+${addOnPrices.engineBay})</span>
              </label>

              <label style={addonCardStyle}>
                <input
                  type="checkbox"
                  checked={selectedAddOns.petHair}
                  onChange={() => handleAddOnChange("petHair")}
                  style={checkboxStyle}
                />
                <span>Pet Hair Removal (+${addOnPrices.petHair})</span>
              </label>

              <label style={addonCardStyle}>
                <input
                  type="checkbox"
                  checked={selectedAddOns.headlight}
                  onChange={() => handleAddOnChange("headlight")}
                  style={checkboxStyle}
                />
                <span>Headlight Restoration (+${addOnPrices.headlight})</span>
              </label>
            </div>
          </div>

          <div style={summaryCardStyle}>
            <div>
              <p style={summaryLabelStyle}>Estimated Total</p>
              <p style={summaryValueStyle}>${total}</p>
            </div>
            <div>
              <p style={summaryLabelStyle}>Deposit Due Today</p>
              <p style={summaryValueStyle}>${deposit}</p>
            </div>
          </div>

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Saving details..." : "Book & Pay Deposit"}
          </button>

          <p style={noteStyle}>
            Need help before booking?{" "}
            <a href="tel:5303212936" style={linkStyle}>
              Call (530) 321-2936
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

const headerCardStyle = {
  marginBottom: "24px",
};

const eyebrowStyle = {
  color: "#ff3b3b",
  fontSize: "0.95rem",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "10px",
};

const titleStyle = {
  fontSize: "2.4rem",
  fontWeight: "800",
  lineHeight: 1.15,
  margin: "0 0 12px 0",
};

const subtitleStyle = {
  fontSize: "1.08rem",
  color: "#cfcfcf",
  lineHeight: 1.6,
  maxWidth: "720px",
  margin: 0,
};

const formCardStyle = {
  backgroundColor: "#0a0a0a",
  border: "1px solid #1f1f1f",
  borderRadius: "22px",
  padding: "28px",
  boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "18px",
};

const inputStyle = {
  width: "100%",
  padding: "20px 18px",
  fontSize: "1.15rem",
  borderRadius: "14px",
  border: "1px solid #242424",
  boxSizing: "border-box",
  backgroundColor: "#f1f4f8",
  color: "#111",
};

const sectionTitleStyle = {
  fontSize: "1.35rem",
  fontWeight: "700",
  marginBottom: "16px",
};

const addonGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "14px",
};

const addonCardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  backgroundColor: "#111",
  border: "1px solid #1f1f1f",
  borderRadius: "14px",
  padding: "16px 18px",
  cursor: "pointer",
};

const checkboxStyle = {
  width: "18px",
  height: "18px",
};

const summaryCardStyle = {
  marginTop: "28px",
  padding: "22px",
  borderRadius: "18px",
  backgroundColor: "#121212",
  border: "1px solid #1f1f1f",
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "16px",
};

const summaryLabelStyle = {
  color: "#bcbcbc",
  fontSize: "0.95rem",
  margin: "0 0 8px 0",
};

const summaryValueStyle = {
  color: "#fff",
  fontWeight: "800",
  fontSize: "1.8rem",
  margin: 0,
};

const buttonStyle = {
  width: "100%",
  marginTop: "28px",
  padding: "18px 20px",
  borderRadius: "999px",
  border: "none",
  backgroundColor: "#ff1d1d",
  color: "#fff",
  fontWeight: "800",
  fontSize: "1.05rem",
  cursor: "pointer",
};

const noteStyle = {
  marginTop: "18px",
  textAlign: "center",
  color: "#d0d0d0",
  fontSize: "0.98rem",
};

const linkStyle = {
  color: "#fff",
};