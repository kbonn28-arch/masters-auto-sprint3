import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  DollarSign,
  Calendar,
  Phone,
  Shield,
  Sparkles,
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do prices stay exact?",
      answer:
        "Prices start at the listed amount and may vary based on the size, condition, and service needs of the vehicle. The website gives a clear starting estimate, and final pricing can change if the vehicle needs extra time or specialized work.",
      icon: DollarSign,
    },
    {
      question: "Can add-on services be booked by themselves?",
      answer:
        "Add-on services are designed to be paired with a Full Detail package. This helps make sure the final result is consistent and the vehicle receives the right level of overall care.",
      icon: Sparkles,
    },
    {
      question: "Can I request service online?",
      answer:
        "Yes. You can use the booking and quote flow on the website to choose a package, select your vehicle size, add upgrades, and send your request online.",
      icon: Phone,
    },
    {
      question: "How long does a detail usually take?",
      answer:
        "A Basic Detail usually takes around 2 to 3 hours, while a Full Detail often takes 4 to 6 hours depending on vehicle size and condition. Ceramic coating and heavier correction work may require more time.",
      icon: Calendar,
    },
    {
      question: "What is the difference between wax and ceramic coating?",
      answer:
        "Wax provides shorter-term shine and protection, while ceramic coating is a longer-lasting upgrade that helps with gloss, water beading, UV defense, and easier ongoing maintenance.",
      icon: Shield,
    },
    {
      question: "Do you offer recurring maintenance plans?",
      answer:
        "Yes. The Maintenance Club is designed for customers who want regular monthly care, easier upkeep, and priority value over time.",
      icon: Calendar,
    },
    {
      question: "Where are services performed?",
      answer:
        "Services are performed in Chico, California. The contact section of the website gives the business location, phone number, and the easiest next step for booking.",
      icon: Phone,
    },
    {
      question: "How do I know what vehicle size to choose?",
      answer:
        "Use the vehicle sizing guide on the site. If your vehicle is between categories or is oversized, lifted, or heavily used, choosing the larger size will usually give the most accurate starting estimate.",
      icon: DollarSign,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="section"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #050505 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Frequently Asked Questions</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Answers before you
            <span className="text-red-500"> even need to call</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            This section helps customers quickly understand pricing, booking,
            timing, upgrades, and what to expect.
          </p>
        </motion.div>

        {/* FAQ Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: "24px",
          }}
          className="faq-grid"
        >
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={infoCardStyle}
          >
            <div style={infoBadgeStyle}>
              <Shield size={16} />
              Helpful Information
            </div>

            <h3 style={infoTitleStyle}>
              Built to reduce confusion and make booking easier
            </h3>

            <p style={infoTextStyle}>
              One of the biggest goals of the new website is to answer common
              questions before a customer ever needs to pick up the phone.
              That means clearer expectations, less back-and-forth, and a
              smoother booking experience.
            </p>

            <div style={infoListStyle}>
              <div style={infoListItemStyle}>
                <span style={infoDotStyle} />
                <span>Clearer pricing expectations</span>
              </div>
              <div style={infoListItemStyle}>
                <span style={infoDotStyle} />
                <span>Simple booking and quote flow</span>
              </div>
              <div style={infoListItemStyle}>
                <span style={infoDotStyle} />
                <span>Better understanding of add-ons and upgrades</span>
              </div>
              <div style={infoListItemStyle}>
                <span style={infoDotStyle} />
                <span>More confidence before requesting service</span>
              </div>
            </div>
          </motion.div>

          {/* Right Accordion */}
          <div style={{ display: "grid", gap: "14px" }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    ...faqCardStyle,
                    ...(isOpen ? faqCardOpenStyle : {}),
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    style={faqButtonStyle}
                  >
                    <div style={faqButtonLeftStyle}>
                      <div style={faqIconWrapStyle}>
                        <faq.icon size={20} color="#ef4444" />
                      </div>
                      <span style={faqQuestionStyle}>{faq.question}</span>
                    </div>

                    <ChevronDown
                      size={20}
                      color="#fca5a5"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={faqAnswerWrapStyle}>
                      <p style={faqAnswerStyle}>{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

/* Styles */
const infoCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "28px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "30px",
  height: "fit-content",
};

const infoBadgeStyle = {
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
  alignItems: "center",
  gap: "12px",
  color: "#e5e7eb",
  fontSize: "0.96rem",
  lineHeight: 1.7,
};

const infoDotStyle = {
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  background: "#ef4444",
  boxShadow: "0 0 0 6px rgba(239,68,68,0.14)",
  flexShrink: 0,
};

const faqCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "22px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  overflow: "hidden",
};

const faqCardOpenStyle = {
  border: "1px solid rgba(239,68,68,0.18)",
};

const faqButtonStyle = {
  width: "100%",
  background: "transparent",
  border: "none",
  color: "#fff",
  padding: "20px 22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  cursor: "pointer",
  textAlign: "left",
};

const faqButtonLeftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const faqIconWrapStyle = {
  width: "44px",
  height: "44px",
  borderRadius: "14px",
  background: "rgba(239,68,68,0.10)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const faqQuestionStyle = {
  color: "#fff",
  fontSize: "1rem",
  fontWeight: "800",
  lineHeight: 1.5,
};

const faqAnswerWrapStyle = {
  padding: "0 22px 20px 80px",
};

const faqAnswerStyle = {
  color: "#cbd5e1",
  fontSize: "0.96rem",
  lineHeight: 1.8,
  margin: 0,
};

export default FAQ;