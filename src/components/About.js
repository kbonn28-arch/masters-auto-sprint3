import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Sparkles, Users, MapPin, Clock3 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Professional Detailing",
      description:
        "Interior and exterior services designed to restore a clean, polished finish.",
    },
    {
      icon: Shield,
      title: "Vehicle Protection",
      description:
        "Paint correction and ceramic options that help protect your investment long-term.",
    },
    {
      icon: Users,
      title: "Customer-Focused Service",
      description:
        "A straightforward experience built around clear communication and quality results.",
    },
  ];

  const checklist = [
    "Interior and exterior detailing for a complete refresh",
    "Paint correction to improve gloss and reduce surface imperfections",
    "Ceramic coating support for added protection and easier maintenance",
    "Clear pricing and service guidance for faster booking decisions",
  ];

  const quickFacts = [
    {
      icon: MapPin,
      label: "Location",
      value: "Chico, California",
    },
    {
      icon: Clock3,
      label: "Focus",
      value: "Quality workmanship and efficient service",
    },
    {
      icon: Shield,
      label: "Goal",
      value: "Protect, restore, and maintain your vehicle",
    },
  ];

  return (
    <section
      id="about"
      className="section"
      style={{
        background:
          "linear-gradient(180deg, #050505 0%, #000000 100%)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">About Master&apos;s Auto Detail</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built around <span className="text-red-500">quality care</span> and
            lasting results
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            At Master&apos;s Auto Detail, we help Chico drivers restore, protect,
            and maintain their vehicles with professional detailing, careful
            workmanship, and customer service you can trust.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
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
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              <Shield size={16} />
              Why Customers Choose Us
            </div>

            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                lineHeight: 1.1,
                marginBottom: "16px",
                color: "#ffffff",
              }}
            >
              Professional car care with a focus on protection and detail
            </h3>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: 1.8,
                fontSize: "1.02rem",
                marginBottom: "24px",
              }}
            >
              Whether your vehicle needs a simple refresh or a deeper restoration,
              our goal is the same: deliver clean, consistent results that help
              your car look better, feel better, and stay protected longer.
            </p>

            <div className="space-y-4">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "12px 0",
                    borderBottom:
                      index !== checklist.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                  }}
                >
                  <CheckCircle2
                    size={20}
                    style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }}
                  />
                  <span
                    style={{
                      color: "#e5e7eb",
                      lineHeight: 1.7,
                      fontSize: "0.98rem",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  background:
                    "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
                  padding: "26px",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "18px",
                    background: "rgba(239,68,68,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <item.icon size={28} color="#ef4444" />
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "800",
                    marginBottom: "10px",
                    color: "#fff",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                    fontSize: "0.97rem",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}

            <div
              className="card"
              style={{
                border: "1px solid rgba(239,68,68,0.16)",
                borderRadius: "24px",
                background: "rgba(239,68,68,0.08)",
                padding: "24px",
                marginTop: "4px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "800",
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                Quick Facts
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "14px",
                }}
              >
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <fact.icon size={18} color="#f87171" style={{ marginTop: "3px" }} />
                    <div>
                      <div
                        style={{
                          color: "#fca5a5",
                          fontWeight: "700",
                          fontSize: "0.88rem",
                          marginBottom: "2px",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {fact.label}
                      </div>
                      <div
                        style={{
                          color: "#f3f4f6",
                          lineHeight: 1.6,
                          fontSize: "0.96rem",
                        }}
                      >
                        {fact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;