import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock3, ArrowRight } from "lucide-react";

export default function Contact() {
  const businessHours = [
    "Monday: 9:00 AM – 5:00 PM",
    "Tuesday: 8:00 AM – 6:00 PM",
    "Wednesday: 8:00 AM – 6:00 PM",
    "Thursday: 8:00 AM – 6:00 PM",
    "Friday: 8:00 AM – 6:00 PM",
    "Saturday: Closed",
    "Sunday: Closed",
  ];

  return (
    <section
      id="contact"
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
          <div className="eyebrow justify-center">Contact Master&apos;s Auto Detail</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to book your
            <span className="text-red-500"> next detail?</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Whether you want to request a quote, ask about ceramic coating,
            or move straight into booking, this is the easiest place to start.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
          className="contact-grid"
        >
          {/* Left CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={primaryCardStyle}
          >
            <div style={primaryBadgeStyle}>Best Next Step</div>

            <h3 style={primaryTitleStyle}>Book online or reach out directly</h3>

            <p style={primaryTextStyle}>
              The fastest way to get started is through the online pricing and
              booking flow. If you have questions first, you can also call or email
              for help choosing the right service.
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

            <div style={noteBoxStyle}>
              Final pricing may vary based on vehicle condition, but the site gives
              a clear starting point before you submit.
            </div>
          </motion.div>

          {/* Right Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={infoCardStyle}
          >
            <h3 style={infoTitleStyle}>Business Information</h3>

            <div style={infoListStyle}>
              <div style={infoItemStyle}>
                <div style={iconWrapStyle}>
                  <Phone size={18} color="#ef4444" />
                </div>
                <div>
                  <div style={infoLabelStyle}>Phone</div>
                  <a href="tel:5303212936" style={infoLinkStyle}>
                    (530) 321-2936
                  </a>
                </div>
              </div>

              <div style={infoItemStyle}>
                <div style={iconWrapStyle}>
                  <Mail size={18} color="#ef4444" />
                </div>
                <div>
                  <div style={infoLabelStyle}>Email</div>
                  <a href="mailto:mastersautodetail@yahoo.com" style={infoLinkStyle}>
                    mastersautodetail@yahoo.com
                  </a>
                </div>
              </div>

              <div style={infoItemStyle}>
                <div style={iconWrapStyle}>
                  <MapPin size={18} color="#ef4444" />
                </div>
                <div>
                  <div style={infoLabelStyle}>Address</div>
                  <p style={infoTextStyle}>
                    636 Nord Ave Ste A
                    <br />
                    Chico, CA 95928
                  </p>
                </div>
              </div>

              <div style={infoItemStyle}>
                <div style={iconWrapStyle}>
                  <Clock3 size={18} color="#ef4444" />
                </div>
                <div>
                  <div style={infoLabelStyle}>Business Hours</div>
                  <div style={hoursListStyle}>
                    {businessHours.map((hour) => (
                      <div key={hour} style={hourRowStyle}>
                        {hour}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* Styles */
const primaryCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "28px",
  background: "linear-gradient(180deg, rgba(22,22,22,0.98) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const primaryBadgeStyle = {
  display: "inline-flex",
  width: "fit-content",
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

const primaryTitleStyle = {
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "900",
  lineHeight: 1.1,
  marginBottom: "14px",
};

const primaryTextStyle = {
  color: "#d1d5db",
  lineHeight: 1.8,
  fontSize: "1rem",
  marginBottom: "22px",
};

const buttonWrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginBottom: "20px",
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

const noteBoxStyle = {
  background: "rgba(239,68,68,0.10)",
  border: "1px solid rgba(239,68,68,0.16)",
  color: "#fca5a5",
  borderRadius: "18px",
  padding: "16px 18px",
  fontSize: "0.93rem",
  lineHeight: 1.7,
  fontWeight: "700",
};

const infoCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "28px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "32px",
};

const infoTitleStyle = {
  color: "#fff",
  fontSize: "1.7rem",
  fontWeight: "800",
  marginBottom: "22px",
};

const infoListStyle = {
  display: "grid",
  gap: "18px",
};

const infoItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "14px",
};

const iconWrapStyle = {
  width: "44px",
  height: "44px",
  borderRadius: "14px",
  background: "rgba(239,68,68,0.10)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const infoLabelStyle = {
  color: "#fca5a5",
  fontWeight: "800",
  fontSize: "0.84rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "6px",
};

const infoLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "1rem",
  lineHeight: 1.7,
};

const infoTextStyle = {
  color: "#e5e7eb",
  fontSize: "0.97rem",
  lineHeight: 1.7,
  margin: 0,
};

const hoursListStyle = {
  display: "grid",
  gap: "4px",
};

const hourRowStyle = {
  color: "#e5e7eb",
  fontSize: "0.95rem",
  lineHeight: 1.6,
};