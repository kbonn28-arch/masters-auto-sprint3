import React from "react";
import { motion } from "framer-motion";
import { MessageSquareText, ArrowRight, Phone, CalendarDays } from "lucide-react";

export default function QuoteForm() {
  return (
    <section
      id="quote"
      className="section"
      style={{
        background: "linear-gradient(180deg, #050505 0%, #000000 100%)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "24px",
          }}
          className="quote-grid"
        >
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={infoCardStyle}
          >
            <div style={eyebrowBadgeStyle}>
              <MessageSquareText size={16} />
              Request a Quote
            </div>

            <h2 style={titleStyle}>Not ready to book a deposit yet?</h2>

            <p style={textStyle}>
              No problem. If you have questions about pricing, vehicle size,
              ceramic coating, add-ons, or condition-based work, you can start
              with a quote request first.
            </p>

            <div style={featureListStyle}>
              <div style={featureItemStyle}>
                <CalendarDays size={18} color="#ef4444" />
                <span>Ask about timing, package fit, or vehicle condition</span>
              </div>

              <div style={featureItemStyle}>
                <MessageSquareText size={18} color="#ef4444" />
                <span>Get a clearer recommendation before committing</span>
              </div>

              <div style={featureItemStyle}>
                <Phone size={18} color="#ef4444" />
                <span>Great for customers who want to talk through options first</span>
              </div>
            </div>

            <div style={noteBoxStyle}>
              Quote requests help capture leads without forcing every visitor
              into the full booking and payment flow right away.
            </div>
          </motion.div>

          {/* Right CTA Panel */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={ctaCardStyle}
          >
            <div style={ctaIconWrapStyle}>
              <MessageSquareText size={28} color="#ef4444" />
            </div>

            <h3 style={ctaTitleStyle}>Start with a quote request</h3>

            <p style={ctaTextStyle}>
              Use the pricing and booking section to select your service, choose
              your vehicle size, and send your information online. If you are not
              ready for deposit checkout, you can still begin the process there.
            </p>

            <div style={buttonWrapStyle}>
              <a href="#booking" style={primaryButtonStyle}>
                Go to Pricing & Booking
                <ArrowRight size={18} />
              </a>

              <a href="tel:5303212936" style={secondaryButtonStyle}>
                <Phone size={18} />
                Call (530) 321-2936
              </a>
            </div>

            <p style={finePrintStyle}>
              Best for customers who want pricing clarity, service guidance, or
              help choosing between Basic Detail, Full Detail, and Ceramic Coating.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .quote-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* Styles */
const infoCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "28px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "30px",
};

const eyebrowBadgeStyle = {
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

const titleStyle = {
  color: "#fff",
  fontSize: "2.1rem",
  fontWeight: "900",
  lineHeight: 1.1,
  marginBottom: "14px",
};

const textStyle = {
  color: "#d1d5db",
  lineHeight: 1.8,
  fontSize: "1rem",
  marginBottom: "22px",
};

const featureListStyle = {
  display: "grid",
  gap: "14px",
};

const featureItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  color: "#e5e7eb",
  fontSize: "0.97rem",
  lineHeight: 1.7,
};

const noteBoxStyle = {
  marginTop: "22px",
  background: "rgba(239,68,68,0.10)",
  border: "1px solid rgba(239,68,68,0.16)",
  color: "#fca5a5",
  borderRadius: "18px",
  padding: "16px 18px",
  fontSize: "0.93rem",
  lineHeight: 1.7,
  fontWeight: "700",
};

const ctaCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "28px",
  background: "linear-gradient(180deg, rgba(22,22,22,0.98) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "34px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const ctaIconWrapStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "18px",
  background: "rgba(239,68,68,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "18px",
};

const ctaTitleStyle = {
  color: "#fff",
  fontSize: "1.8rem",
  fontWeight: "900",
  lineHeight: 1.15,
  marginBottom: "12px",
};

const ctaTextStyle = {
  color: "#cbd5e1",
  lineHeight: 1.8,
  fontSize: "1rem",
  marginBottom: "22px",
};

const buttonWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginBottom: "18px",
};

const primaryButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textDecoration: "none",
  padding: "16px 22px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
  color: "#fff",
  fontWeight: "800",
  fontSize: "1rem",
  boxShadow: "0 16px 34px rgba(255, 0, 0, 0.22)",
};

const secondaryButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textDecoration: "none",
  padding: "16px 22px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.03)",
  color: "#fff",
  fontWeight: "800",
  fontSize: "1rem",
};

const finePrintStyle = {
  color: "#9ca3af",
  fontSize: "0.9rem",
  lineHeight: 1.7,
  margin: 0,
};