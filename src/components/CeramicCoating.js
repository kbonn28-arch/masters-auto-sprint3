import React from "react";
import { motion } from "framer-motion";
import { Shield, Droplets, Sun, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const CeramicCoating = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Long-Lasting Protection",
      description:
        "A stronger and longer-lasting layer of protection than traditional wax.",
    },
    {
      icon: Droplets,
      title: "Hydrophobic Finish",
      description:
        "Water beads and rolls off more easily, helping your vehicle stay cleaner.",
    },
    {
      icon: Sun,
      title: "UV & Heat Defense",
      description:
        "Helps reduce fading, oxidation, and wear from sun exposure in Chico conditions.",
    },
    {
      icon: Sparkles,
      title: "Gloss Enhancement",
      description:
        "Adds a deep, polished finish that helps your paint look cleaner and sharper.",
    },
  ];

  const includedPoints = [
    "Helps protect against dirt, contaminants, and environmental exposure",
    "Makes regular maintenance easier",
    "Supports a glossy, showroom-like finish",
    "A strong upgrade for drivers who want longer-term surface protection",
  ];

  return (
    <section
      id="ceramic"
      className="section"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #050505 100%)",
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
          <div className="eyebrow justify-center">Ceramic Coatings in Chico, CA</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Upgrade to <span className="text-red-500">long-lasting protection</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ceramic coating is a premium protection option for drivers who want
            better gloss, easier maintenance, and stronger defense against sun,
            dirt, and daily wear.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "24px",
          }}
          className="ceramic-grid"
        >
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "28px",
              background:
                "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
              padding: "32px",
            }}
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
              <Shield size={16} />
              Why Ceramic Coating
            </div>

            <h3
              style={{
                color: "#fff",
                fontSize: "2rem",
                fontWeight: "900",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              A smarter protection option for drivers who want more than wax
            </h3>

            <p
              style={{
                color: "#d1d5db",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Ceramic coating creates a durable protective layer that helps your
              vehicle resist water, contaminants, UV exposure, and everyday buildup.
              It is a strong option for keeping your paint looking cleaner, shinier,
              and easier to maintain over time.
            </p>

            <div style={{ display: "grid", gap: "14px" }}>
              {includedPoints.map((point, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "12px 0",
                    borderBottom:
                      index !== includedPoints.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="#ef4444"
                    style={{ marginTop: "2px", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      color: "#e5e7eb",
                      lineHeight: 1.7,
                      fontSize: "0.97rem",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "24px",
                padding: "18px",
                borderRadius: "18px",
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.16)",
              }}
            >
              <p
                style={{
                  color: "#fca5a5",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                  margin: 0,
                  fontWeight: "700",
                }}
              >
                Ceramic coating can also be used as an upgrade path from a Full
                Detail for customers who want added gloss and longer-term paint protection.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  background:
                    "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    background: "rgba(239,68,68,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  <benefit.icon size={28} color="#ef4444" />
                </div>

                <h3
                  style={{
                    color: "#fff",
                    fontSize: "1.18rem",
                    fontWeight: "800",
                    marginBottom: "8px",
                  }}
                >
                  {benefit.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                    margin: 0,
                  }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}

            <a
              href="#booking"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                textDecoration: "none",
                padding: "18px 20px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
                color: "#fff",
                fontWeight: "800",
                fontSize: "1rem",
                marginTop: "6px",
                boxShadow: "0 16px 34px rgba(255, 0, 0, 0.22)",
              }}
            >
              Request a Ceramic Quote
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .ceramic-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CeramicCoating;