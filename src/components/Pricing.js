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

    const chosenAddOns = Object.entries(selectedAddOns)
      .filter(([, selected]) => selected)
      .map(([key]) => {
        if (key === "engineBay") return "Engine Bay Detail";
        if (key === "petHair") return "Pet Hair Removal";
        if (key === "headlight") return "Headlight Restoration";
        return key;
      });

    const subject = `New Booking Request - ${fullName}`;
    const body = `
New booking request from Masters Auto website

Customer Name: ${fullName}
Customer Email: ${email}
Customer Phone: ${phone}
Vehicle: ${vehicleLabel(vehicle)}

Selected Add-ons: ${chosenAddOns.length ? chosenAddOns.join(", ") : "None"}

Estimated Total: $${total}
Deposit Due Today: $${deposit}
    `.trim();

    window.location.href = `mailto:booking@mastersauto.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "32px",
          }}
        >
          Masters Auto Booking
        </h2>

        <form onSubmit={handleBooking}>
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

          <div style={{ marginTop: "40px", marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Add-ons
            </h3>

            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={selectedAddOns.engineBay}
                onChange={() => handleAddOnChange("engineBay")}
                style={checkboxStyle}
              />
              Engine Bay Detail (+${addOnPrices.engineBay})
            </label>

            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={selectedAddOns.petHair}
                onChange={() => handleAddOnChange("petHair")}
                style={checkboxStyle}
              />
              Pet Hair Removal (+${addOnPrices.petHair})
            </label>

            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={selectedAddOns.headlight}
                onChange={() => handleAddOnChange("headlight")}
                style={checkboxStyle}
              />
              Headlight Restoration (+${addOnPrices.headlight})
            </label>
          </div>

          <div style={{ marginBottom: "30px", lineHeight: "1.8" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: "700", margin: "0 0 8px 0" }}>
              Total: ${total}
            </p>
            <p style={{ fontSize: "1.25rem", margin: 0 }}>
              Deposit Due Today: ${deposit}
            </p>
          </div>

          <button type="submit" style={buttonStyle}>
            Send Booking Request
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "22px 20px",
  fontSize: "1.25rem",
  borderRadius: "14px",
  border: "1px solid #222",
  marginBottom: "20px",
  boxSizing: "border-box",
  backgroundColor: "#f1f1f1",
  color: "#111",
};

const checkboxLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  fontSize: "1.2rem",
  marginBottom: "18px",
};

const checkboxStyle = {
  width: "20px",
  height: "20px",
};

const buttonStyle = {
  width: "100%",
  padding: "22px",
  fontSize: "1.5rem",
  fontWeight: "700",
  border: "none",
  borderRadius: "14px",
  backgroundColor: "#ff1d1d",
  color: "#fff",
  cursor: "pointer",
};