import React, { useMemo, useState } from "react";

const vehiclePrices = {
  sedan: 120,
  suv: 160,
  truck: 180,
  xlarge: 220,
};

const addOnPrices = {
  engineBay: 40,
  petHair: 35,
  headlight: 60,
};

function vehicleLabel(vehicle) {
  switch (vehicle) {
    case "sedan":
      return "Sedan";
    case "suv":
      return "SUV";
    case "truck":
      return "Truck";
    case "xlarge":
      return "Extra Large SUV / Van";
    default:
      return vehicle;
  }
}

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

  const total = basePrice + addOnTotal;
  const deposit = total > 0 ? Math.max(50, Math.round(total * 0.3)) : 0;

  const handleAddOnChange = (key) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

const handleBooking = (e) => {
  e.preventDefault();

  if (!fullName.trim() || !email.trim() || !phone.trim()) {
    alert("Please fill out your name, email, and phone number.");
    return;
  }

  window.location.href = "https://buy.stripe.com/test_14A28sdY36PU7tmc3t4wM00";
};

    const chosenAddOns = Object.entries(selectedAddOns)
      .filter(([, selected]) => selected)
      .map(([key]) => {
        if (key === "engineBay") return { name: "Engine Bay Detail", price: 40 };
        if (key === "petHair") return { name: "Pet Hair Removal", price: 35 };
        if (key === "headlight") return { name: "Headlight Restoration", price: 60 };
        return { name: key, price: 0 };
      });

    try {
      setLoading(true);

      const res = await fetch(
        "https://masters-auto-sprint3.onrender.com/api/payments/create-booking-checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookingId: `bk_${Date.now()}`,
            customerName: fullName,
            customerEmail: email,
            serviceName: "Detail Booking",
            vehicleSize: vehicleLabel(vehicle),
            addOns: chosenAddOns,
            totalPrice: total,
            depositAmount: deposit,
          }),
        }
      );

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Error starting payment");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed");
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
            {loading ? "Redirecting..." : "Book & Pay Deposit"}
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
  gap: "14px",
};

const addonCardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "16px 18px",
  borderRadius: "14px",
  backgroundColor: "#121212",
  border: "1px solid #242424",
  fontSize: "1.08rem",
};

const checkboxStyle = {
  width: "20px",
  height: "20px",
  flexShrink: 0,
};

const summaryCardStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  marginTop: "28px",
  marginBottom: "24px",
  padding: "20px",
  borderRadius: "16px",
  backgroundColor: "#111827",
  border: "1px solid #1f2937",
};

const summaryLabelStyle = {
  margin: "0 0 8px 0",
  color: "#c5cad3",
  fontSize: "0.95rem",
};

const summaryValueStyle = {
  margin: 0,
  fontSize: "2rem",
  fontWeight: "800",
  color: "#fff",
};

const buttonStyle = {
  width: "100%",
  padding: "20px",
  fontSize: "1.35rem",
  fontWeight: "800",
  border: "none",
  borderRadius: "16px",
  backgroundColor: "#ff1d1d",
  color: "#fff",
  cursor: "pointer",
};

const noteStyle = {
  marginTop: "16px",
  textAlign: "center",
  color: "#cfcfcf",
  fontSize: "0.98rem",
};

const linkStyle = {
  color: "#fff",
  fontWeight: "700",
  textDecoration: "none",
};