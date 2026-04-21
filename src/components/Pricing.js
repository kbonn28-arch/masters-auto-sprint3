import React, { useMemo, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meepbqgd";
const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/test_14A28sdY36PU7tmc3t4wM00";

const packageData = {
  basic: {
    name: "Basic Detail",
    description:
      "A straightforward inside-and-out refresh with hand wash, wax, interior wipe down, windows, and vacuuming.",
    duration: "2–3 hours",
    prices: {
      xsmall: 159,
      small: 195,
      medium: 249,
      large: 339,
      xlarge: 429,
    },
    includes: [
      "Hand wash",
      "Wheel cleaning",
      "Window cleaning",
      "Tire and trim dressing",
      "Wax protection",
      "Interior wipe down",
      "Vacuum seats and carpets",
    ],
  },
  full: {
    name: "Full Detail",
    description:
      "A deeper restoration package with wash, clay bar treatment, polish, and paint protection.",
    duration: "4–6 hours",
    prices: {
      xsmall: 359,
      small: 395,
      medium: 449,
      large: 539,
      xlarge: 629,
    },
    includes: [
      "Hand wash including jambs",
      "Clay bar treatment",
      "Polish to improve gloss",
      "Sealant protection",
      "Interior deep clean",
      "Windows and trim refresh",
      "Vacuum and finish work",
    ],
  },
  ceramic: {
    name: "Ceramic Coating Quote",
    description:
      "Long-term gloss and protection for drivers who want easier maintenance and better defense against UV, dirt, and contaminants.",
    duration: "Custom quote",
    prices: {
      xsmall: 500,
      small: 600,
      medium: 700,
      large: 850,
      xlarge: 1000,
    },
    includes: [
      "Custom consultation",
      "Protection upgrade path",
      "Gloss enhancement",
      "Hydrophobic finish",
      "Heat and UV defense",
      "Maintenance recommendations",
    ],
  },
};

const vehicleOptions = [
  {
    id: "xsmall",
    label: "Extra Small",
    example: "Compact cars",
  },
  {
    id: "small",
    label: "Small",
    example: "Sedans",
  },
  {
    id: "medium",
    label: "Medium",
    example: "Crossovers / small SUVs",
  },
  {
    id: "large",
    label: "Large",
    example: "Trucks / larger SUVs",
  },
  {
    id: "xlarge",
    label: "Extra Large",
    example: "Tahoe, Suburban, vans",
  },
];

const addOns = [
  {
    id: "headlight",
    label: "Headlight Restoration",
    price: 60,
    note: "Improves clarity and adds UV protection",
  },
  {
    id: "spot",
    label: "Spot Cleaning",
    price: 35,
    note: "Targets stains in specific areas",
  },
  {
    id: "shampoo",
    label: "Deep Shampoo",
    price: 100,
    note: "Removes embedded dirt and helps reduce odors",
  },
];

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState("basic");
  const [selectedVehicle, setSelectedVehicle] = useState("medium");
  const [selectedAddOns, setSelectedAddOns] = useState({
    headlight: false,
    spot: false,
    shampoo: false,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activePackage = packageData[selectedPackage];
  const basePrice = activePackage.prices[selectedVehicle] || 0;

  const addOnTotal = useMemo(() => {
    return addOns.reduce((total, addon) => {
      return selectedAddOns[addon.id] ? total + addon.price : total;
    }, 0);
  }, [selectedAddOns]);

  const selectedAddOnNames = useMemo(() => {
    return addOns
      .filter((addon) => selectedAddOns[addon.id])
      .map((addon) => addon.label);
  }, [selectedAddOns]);

  const totalEstimate = basePrice + addOnTotal;
  const depositDue = 50;

  const handlePackageChange = (packageId) => {
    setSelectedPackage(packageId);

    if (packageId !== "full") {
      setSelectedAddOns({
        headlight: false,
        spot: false,
        shampoo: false,
      });
    }
  };

  const handleAddOnToggle = (id) => {
    if (selectedPackage !== "full") return;

    setSelectedAddOns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      alert("Please enter your full name.");
      return false;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email.");
      return false;
    }

    if (!formData.phone.trim()) {
      alert("Please enter your phone number.");
      return false;
    }

    return true;
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const payload = {
        customerName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.preferredDate || "Not provided",
        notes: formData.notes || "No additional notes",
        packageName: activePackage.name,
        packageDuration: activePackage.duration,
        vehicleSize: vehicleOptions.find((v) => v.id === selectedVehicle)?.label || selectedVehicle,
        vehicleTypeDescription:
          vehicleOptions.find((v) => v.id === selectedVehicle)?.example || "",
        addOns:
          selectedPackage === "full"
            ? selectedAddOnNames.join(", ") || "None selected"
            : "Not applicable",
        estimatedBasePrice: basePrice,
        addOnTotal,
        estimatedTotal: totalEstimate,
        depositDueToday: depositDue,
        paymentStatus: "Checkout started",
        bookingSource: "Website booking form",
        _subject: `New Booking Request - ${formData.fullName}`,
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

      setSubmitted(true);
      window.location.href = STRIPE_CHECKOUT_URL;
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("There was a problem sending your booking request. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "90px 20px",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Top Heading */}
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto 32px",
            textAlign: "center",
          }}
        >
          <p style={eyebrowStyle}>Pricing & Booking</p>
          <h2 style={headingStyle}>
            Choose your package, vehicle size, and reserve your detail online
          </h2>
          <p style={subheadingStyle}>
            Pricing updates instantly based on package and vehicle size. Add-ons can
            be selected with Full Detail packages.
          </p>
        </div>

        {/* Package Selection */}
        <div style={packageGridStyle}>
          {Object.entries(packageData).map(([key, pkg]) => {
            const isActive = selectedPackage === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => handlePackageChange(key)}
                style={{
                  ...packageCardStyle,
                  ...(isActive ? activePackageCardStyle : {}),
                }}
              >
                <div style={packageLabelStyle}>{pkg.name}</div>
                <div style={packageDescriptionStyle}>{pkg.description}</div>
                <div style={packageMetaStyle}>Estimated time: {pkg.duration}</div>
              </button>
            );
          })}
        </div>

        <div style={mainGridStyle}>
          {/* Left Column */}
          <div style={panelStyle}>
            <h3 style={panelTitleStyle}>1. Select your vehicle size</h3>

            <div style={vehicleGridStyle}>
              {vehicleOptions.map((vehicle) => {
                const active = selectedVehicle === vehicle.id;

                return (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => setSelectedVehicle(vehicle.id)}
                    style={{
                      ...vehicleCardStyle,
                      ...(active ? activeVehicleCardStyle : {}),
                    }}
                  >
                    <div style={vehicleLabelStyle}>{vehicle.label}</div>
                    <div style={vehicleExampleStyle}>{vehicle.example}</div>
                    <div style={vehiclePriceStyle}>
                      Starting at ${activePackage.prices[vehicle.id]}
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: "28px" }}>
              <h3 style={panelTitleStyle}>2. What’s included</h3>

              <div style={includedListStyle}>
                {activePackage.includes.map((item) => (
                  <div key={item} style={includedItemStyle}>
                    <span style={includedCheckStyle}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "28px" }}>
              <h3 style={panelTitleStyle}>3. Add-ons</h3>

              {selectedPackage !== "full" ? (
                <div style={noticeStyle}>
                  Add-on services are available with Full Detail packages only.
                </div>
              ) : (
                <div style={addonGridStyle}>
                  {addOns.map((addon) => {
                    const active = selectedAddOns[addon.id];

                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => handleAddOnToggle(addon.id)}
                        style={{
                          ...addonCardStyle,
                          ...(active ? activeAddonCardStyle : {}),
                        }}
                      >
                        <div style={addonTopRowStyle}>
                          <span style={addonNameStyle}>{addon.label}</span>
                          <span style={addonPriceStyle}>+${addon.price}</span>
                        </div>
                        <div style={addonNoteStyle}>{addon.note}</div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div style={panelStyle}>
            <h3 style={panelTitleStyle}>4. Booking details</h3>

            <form onSubmit={handleBookingSubmit}>
              <div style={formGridStyle}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  style={inputStyle}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyle}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle}
                />

                <input
                  type="text"
                  name="preferredDate"
                  placeholder="Preferred Date / Time"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>

              <textarea
                name="notes"
                placeholder="Vehicle condition, questions, or anything we should know"
                value={formData.notes}
                onChange={handleInputChange}
                style={textareaStyle}
              />

              <div style={summaryCardStyle}>
                <div style={summaryHeadingStyle}>Booking Summary</div>

                <div style={summaryRowStyle}>
                  <span>Package</span>
                  <span>{activePackage.name}</span>
                </div>

                <div style={summaryRowStyle}>
                  <span>Vehicle Size</span>
                  <span>
                    {vehicleOptions.find((v) => v.id === selectedVehicle)?.label}
                  </span>
                </div>

                <div style={summaryRowStyle}>
                  <span>Base Price</span>
                  <span>${basePrice}</span>
                </div>

                <div style={summaryRowStyle}>
                  <span>Add-ons</span>
                  <span>${addOnTotal}</span>
                </div>

                <div style={summaryTotalRowStyle}>
                  <span>Estimated Total</span>
                  <span>${totalEstimate}</span>
                </div>

                <div style={depositBoxStyle}>
                  Deposit due today: <strong>${depositDue}</strong>
                </div>

                <p style={finePrintStyle}>
                  Final pricing may vary based on the condition of the vehicle.
                  After submitting, you will continue to secure checkout for your
                  deposit.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  ...submitButtonStyle,
                  ...(loading ? disabledButtonStyle : {}),
                }}
              >
                {loading ? "Processing..." : "Continue to Deposit Checkout"}
              </button>

              {submitted && (
                <p style={successTextStyle}>
                  Booking details sent. Redirecting to payment...
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Styles */
const eyebrowStyle = {
  color: "#ff4d4d",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: "800",
  fontSize: "0.9rem",
  marginBottom: "12px",
};

const headingStyle = {
  fontSize: "clamp(2.1rem, 4vw, 3.6rem)",
  lineHeight: 1.08,
  fontWeight: "900",
  margin: "0 0 14px 0",
};

const subheadingStyle = {
  color: "#d1d5db",
  fontSize: "1.05rem",
  lineHeight: 1.8,
  maxWidth: "760px",
  margin: "0 auto",
};

const packageGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px",
  marginBottom: "24px",
};

const packageCardStyle = {
  textAlign: "left",
  background: "#0b0b0b",
  border: "1px solid #1c1c1c",
  borderRadius: "22px",
  padding: "22px",
  color: "#fff",
  cursor: "pointer",
};

const activePackageCardStyle = {
  border: "1px solid rgba(255, 58, 58, 0.45)",
  boxShadow: "0 0 0 1px rgba(255, 58, 58, 0.15)",
  background: "linear-gradient(180deg, #121212 0%, #0b0b0b 100%)",
};

const packageLabelStyle = {
  fontSize: "1.2rem",
  fontWeight: "800",
  marginBottom: "10px",
};

const packageDescriptionStyle = {
  color: "#d1d5db",
  lineHeight: 1.65,
  fontSize: "0.95rem",
  marginBottom: "14px",
};

const packageMetaStyle = {
  color: "#f87171",
  fontWeight: "700",
  fontSize: "0.9rem",
};

const mainGridStyle = {
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: "24px",
};

const panelStyle = {
  background: "#0b0b0b",
  border: "1px solid #1c1c1c",
  borderRadius: "26px",
  padding: "28px",
};

const panelTitleStyle = {
  fontSize: "1.2rem",
  fontWeight: "800",
  marginBottom: "16px",
};

const vehicleGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
};

const vehicleCardStyle = {
  textAlign: "left",
  borderRadius: "18px",
  border: "1px solid #232323",
  background: "#111111",
  padding: "16px",
  cursor: "pointer",
  color: "#fff",
};

const activeVehicleCardStyle = {
  border: "1px solid rgba(255, 58, 58, 0.45)",
  background: "rgba(255, 58, 58, 0.08)",
};

const vehicleLabelStyle = {
  fontWeight: "800",
  fontSize: "1rem",
  marginBottom: "6px",
};

const vehicleExampleStyle = {
  color: "#a1a1aa",
  fontSize: "0.88rem",
  marginBottom: "8px",
  lineHeight: 1.5,
};

const vehiclePriceStyle = {
  color: "#f87171",
  fontWeight: "700",
  fontSize: "0.92rem",
};

const includedListStyle = {
  display: "grid",
  gap: "12px",
};

const includedItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  color: "#e5e7eb",
  lineHeight: 1.6,
};

const includedCheckStyle = {
  color: "#ef4444",
  fontWeight: "900",
};

const noticeStyle = {
  background: "rgba(255, 58, 58, 0.10)",
  border: "1px solid rgba(255, 58, 58, 0.18)",
  color: "#fca5a5",
  borderRadius: "18px",
  padding: "16px",
  lineHeight: 1.6,
};

const addonGridStyle = {
  display: "grid",
  gap: "12px",
};

const addonCardStyle = {
  textAlign: "left",
  borderRadius: "18px",
  border: "1px solid #232323",
  background: "#111111",
  padding: "16px",
  cursor: "pointer",
  color: "#fff",
};

const activeAddonCardStyle = {
  border: "1px solid rgba(255, 58, 58, 0.45)",
  background: "rgba(255, 58, 58, 0.08)",
};

const addonTopRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  marginBottom: "8px",
};

const addonNameStyle = {
  fontWeight: "800",
  fontSize: "0.98rem",
};

const addonPriceStyle = {
  color: "#f87171",
  fontWeight: "800",
};

const addonNoteStyle = {
  color: "#cbd5e1",
  fontSize: "0.9rem",
  lineHeight: 1.6,
};

const formGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "14px",
};

const inputStyle = {
  width: "100%",
  backgroundColor: "#111111",
  border: "1px solid #262626",
  borderRadius: "14px",
  padding: "15px 16px",
  color: "#fff",
  fontSize: "0.98rem",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  minHeight: "120px",
  marginTop: "14px",
  backgroundColor: "#111111",
  border: "1px solid #262626",
  borderRadius: "14px",
  padding: "15px 16px",
  color: "#fff",
  fontSize: "0.98rem",
  lineHeight: 1.6,
  resize: "vertical",
  outline: "none",
};

const summaryCardStyle = {
  marginTop: "18px",
  background: "#111111",
  border: "1px solid #262626",
  borderRadius: "20px",
  padding: "18px",
};

const summaryHeadingStyle = {
  fontWeight: "800",
  fontSize: "1.05rem",
  marginBottom: "14px",
};

const summaryRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
  color: "#d1d5db",
  padding: "8px 0",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
};

const summaryTotalRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
  color: "#fff",
  fontWeight: "800",
  padding: "12px 0 4px",
  fontSize: "1.05rem",
};

const depositBoxStyle = {
  marginTop: "14px",
  background: "rgba(255, 58, 58, 0.10)",
  border: "1px solid rgba(255, 58, 58, 0.18)",
  color: "#fca5a5",
  borderRadius: "14px",
  padding: "14px 16px",
  fontSize: "0.96rem",
};

const finePrintStyle = {
  color: "#9ca3af",
  fontSize: "0.85rem",
  lineHeight: 1.7,
  marginTop: "14px",
  marginBottom: 0,
};

const submitButtonStyle = {
  width: "100%",
  marginTop: "18px",
  background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
  border: "none",
  borderRadius: "999px",
  color: "#fff",
  padding: "16px 18px",
  fontSize: "1rem",
  fontWeight: "800",
  cursor: "pointer",
  boxShadow: "0 16px 34px rgba(255, 0, 0, 0.22)",
};

const disabledButtonStyle = {
  opacity: 0.7,
  cursor: "not-allowed",
};

const successTextStyle = {
  marginTop: "12px",
  color: "#86efac",
  fontWeight: "700",
  fontSize: "0.95rem",
};