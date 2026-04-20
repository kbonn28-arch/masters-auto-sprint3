import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Calendar,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Car,
} from "lucide-react";

const MaintenanceClub = () => {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleInfo: "",
    plan: "professional",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const plans = [
    {
      id: "basic",
      name: "Basic Care",
      price: "$39",
      period: "/month",
      description: "A simple recurring plan for drivers who want regular upkeep.",
      features: [
        "Monthly exterior wash",
        "Interior vacuum and wipe down",
        "Window cleaning",
        "Tire dressing",
        "Discount on additional services",
      ],
    },
    {
      id: "professional",
      name: "Professional Care",
      price: "$79",
      period: "/month",
      description: "The best fit for customers who want consistent year-round care.",
      features: [
        "Bi-weekly exterior wash",
        "Interior upkeep visits",
        "Monthly wax support",
        "Priority scheduling",
        "Larger discount on additional services",
        "Ceramic maintenance support",
      ],
      featured: true,
    },
    {
      id: "premium",
      name: "Premium Care",
      price: "$129",
      period: "/month",
      description: "A higher-touch plan for drivers who want the most protection and attention.",
      features: [
        "Frequent full-service upkeep",
        "Priority booking access",
        "Advanced protection support",
        "Paint and finish maintenance",
        "Interior conditioning support",
        "Best member discount tier",
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Protect Your Investment",
      text: "Routine care helps your vehicle stay cleaner, sharper, and easier to maintain.",
    },
    {
      icon: Calendar,
      title: "Consistent Monthly Care",
      text: "A recurring plan keeps your vehicle on schedule instead of waiting until it needs a reset.",
    },
    {
      icon: Sparkles,
      title: "Member Value",
      text: "Club members receive added convenience, recurring service value, and priority attention.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "plan" ? { plan: value } : {}),
    }));
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setFormData((prev) => ({
      ...prev,
      plan: planId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("Please enter your name, email, and phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://masters-auto-sprint3.onrender.com/api/maintenance-subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            selectedPlan,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error("Subscription request failed");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicleInfo: "",
        plan: selectedPlan,
      });
    } catch (error) {
      console.error("Maintenance Club submission error:", error);
      alert("There was a problem submitting your request. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="maintenance-club"
      className="section"
      style={{
        background: "linear-gradient(180deg, #050505 0%, #000000 100%)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Maintenance Club</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join the club and keep your vehicle
            <span className="text-red-500"> cleaner year-round</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            A recurring monthly membership designed for customers who want easier
            upkeep, better consistency, and long-term vehicle care.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
            marginBottom: "28px",
          }}
          className="club-benefits-grid"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              style={benefitCardStyle}
            >
              <div style={benefitIconWrapStyle}>
                <benefit.icon size={24} color="#ef4444" />
              </div>
              <h3 style={benefitTitleStyle}>{benefit.title}</h3>
              <p style={benefitTextStyle}>{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
            marginBottom: "28px",
          }}
          className="club-plan-grid"
        >
          {plans.map((plan) => {
            const active = selectedPlan === plan.id;

            return (
              <motion.button
                key={plan.id}
                type="button"
                onClick={() => handlePlanSelect(plan.id)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  ...planCardStyle,
                  ...(active ? activePlanCardStyle : {}),
                  ...(plan.featured ? featuredPlanCardStyle : {}),
                }}
              >
                {plan.featured && (
                  <div style={featuredBadgeStyle}>Most Popular</div>
                )}

                <div style={planNameStyle}>{plan.name}</div>

                <div style={planPriceRowStyle}>
                  <span style={planPriceStyle}>{plan.price}</span>
                  <span style={planPeriodStyle}>{plan.period}</span>
                </div>

                <p style={planDescriptionStyle}>{plan.description}</p>

                <div style={planMonthlyNoteStyle}>Billed monthly</div>

                <div style={planFeatureListStyle}>
                  {plan.features.map((feature) => (
                    <div key={feature} style={planFeatureItemStyle}>
                      <CheckCircle2 size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
          className="club-signup-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={infoPanelStyle}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "999px",
                background: "rgba(239,68,68,0.10)",
                border: "1px solid rgba(239,68,68,0.18)",
                color: "#f87171",
                fontWeight: "800",
                fontSize: "0.84rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "18px",
              }}
            >
              <Car size={16} />
              Membership Benefits
            </div>

            <h3 style={infoTitleStyle}>Why customers choose the Maintenance Club</h3>

            <p style={infoTextStyle}>
              Instead of waiting until your vehicle needs a major reset, the
              Maintenance Club keeps you on a steady care plan. It is designed
              to save time, create repeat value, and keep your car looking better
              throughout the year.
            </p>

            <div style={infoListStyle}>
              <div style={infoListItemStyle}>
                <CheckCircle2 size={18} color="#ef4444" />
                <span>Clear monthly billing</span>
              </div>
              <div style={infoListItemStyle}>
                <CheckCircle2 size={18} color="#ef4444" />
                <span>Priority scheduling for members</span>
              </div>
              <div style={infoListItemStyle}>
                <CheckCircle2 size={18} color="#ef4444" />
                <span>Recurring care instead of one-time catch-up visits</span>
              </div>
              <div style={infoListItemStyle}>
                <CheckCircle2 size={18} color="#ef4444" />
                <span>Built to support long-term appearance and upkeep</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={formPanelStyle}
          >
            <h3 style={formTitleStyle}>Join the Club</h3>
            <p style={formTextStyle}>
              Fill out the form below and we’ll follow up to confirm your plan,
              vehicle details, and next steps.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={formGridStyle}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
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

                <select
                  name="plan"
                  value={selectedPlan}
                  onChange={(e) => handlePlanSelect(e.target.value)}
                  style={inputStyle}
                >
                  {plans.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} ({plan.price}{plan.period})
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                name="vehicleInfo"
                placeholder="Vehicle year, make, model, and any notes"
                value={formData.vehicleInfo}
                onChange={handleInputChange}
                style={textareaStyle}
              />

              <div style={finePrintBoxStyle}>
                Membership pricing is billed monthly. Final setup details and scheduling
                are confirmed after submission.
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  ...submitButtonStyle,
                  ...(loading ? disabledButtonStyle : {}),
                }}
              >
                {loading ? "Submitting..." : "Submit Membership Request"}
                {!loading && <ArrowRight size={18} />}
              </button>

              {submitted && (
                <p style={successTextStyle}>
                  Your Maintenance Club request has been submitted. We’ll contact you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .club-benefits-grid,
          .club-plan-grid,
          .club-signup-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

/* Styles */
const benefitCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "24px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "24px",
};

const benefitIconWrapStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "16px",
  background: "rgba(239,68,68,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "14px",
};

const benefitTitleStyle = {
  color: "#fff",
  fontSize: "1.12rem",
  fontWeight: "800",
  marginBottom: "8px",
};

const benefitTextStyle = {
  color: "#cbd5e1",
  fontSize: "0.95rem",
  lineHeight: 1.7,
  margin: 0,
};

const planCardStyle = {
  position: "relative",
  textAlign: "left",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "24px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "24px",
  color: "#fff",
  cursor: "pointer",
};

const activePlanCardStyle = {
  border: "1px solid rgba(255,58,58,0.45)",
  boxShadow: "0 0 0 1px rgba(255,58,58,0.16)",
};

const featuredPlanCardStyle = {
  background: "linear-gradient(180deg, rgba(32,12,12,0.98) 0%, rgba(10,10,10,0.98) 100%)",
};

const featuredBadgeStyle = {
  position: "absolute",
  top: "-12px",
  left: "20px",
  background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
  color: "#fff",
  borderRadius: "999px",
  padding: "7px 12px",
  fontSize: "0.78rem",
  fontWeight: "800",
};

const planNameStyle = {
  fontSize: "1.25rem",
  fontWeight: "800",
  marginBottom: "10px",
};

const planPriceRowStyle = {
  display: "flex",
  alignItems: "flex-end",
  gap: "6px",
  marginBottom: "10px",
};

const planPriceStyle = {
  fontSize: "2.2rem",
  lineHeight: 1,
  fontWeight: "900",
};

const planPeriodStyle = {
  color: "#fca5a5",
  fontWeight: "700",
  fontSize: "1rem",
};

const planDescriptionStyle = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  fontSize: "0.94rem",
  marginBottom: "14px",
};

const planMonthlyNoteStyle = {
  display: "inline-block",
  marginBottom: "16px",
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(239,68,68,0.10)",
  border: "1px solid rgba(239,68,68,0.18)",
  color: "#fca5a5",
  fontWeight: "700",
  fontSize: "0.82rem",
};

const planFeatureListStyle = {
  display: "grid",
  gap: "10px",
};

const planFeatureItemStyle = {
  display: "flex",
  gap: "10px",
  alignItems: "flex-start",
  color: "#e5e7eb",
  lineHeight: 1.6,
  fontSize: "0.93rem",
};

const infoPanelStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "28px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "30px",
};

const infoTitleStyle = {
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "900",
  lineHeight: 1.1,
  marginBottom: "14px",
};

const infoTextStyle = {
  color: "#d1d5db",
  lineHeight: 1.8,
  fontSize: "1rem",
  marginBottom: "22px",
};

const infoListStyle = {
  display: "grid",
  gap: "12px",
};

const infoListItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  color: "#e5e7eb",
  lineHeight: 1.7,
  fontSize: "0.96rem",
};

const formPanelStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "28px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "30px",
};

const formTitleStyle = {
  color: "#fff",
  fontSize: "1.7rem",
  fontWeight: "800",
  marginBottom: "8px",
};

const formTextStyle = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  fontSize: "0.97rem",
  marginBottom: "18px",
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

const finePrintBoxStyle = {
  marginTop: "14px",
  background: "rgba(255,58,58,0.10)",
  border: "1px solid rgba(255,58,58,0.18)",
  color: "#fca5a5",
  borderRadius: "16px",
  padding: "14px 16px",
  fontSize: "0.92rem",
  lineHeight: 1.7,
};

const submitButtonStyle = {
  width: "100%",
  marginTop: "16px",
  background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
  border: "none",
  borderRadius: "999px",
  color: "#fff",
  padding: "16px 18px",
  fontSize: "1rem",
  fontWeight: "800",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
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

export default MaintenanceClub;