import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock3, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "About", href: "#about" },
    { name: "Add-On Services", href: "#services" },
    { name: "Pricing & Booking", href: "#booking" },
    { name: "Sizing Guide", href: "#sizing" },
    { name: "Ceramic Coating", href: "#ceramic" },
    { name: "Maintenance Club", href: "#maintenance-club" },
  ];

  const companyLinks = [
    { name: "Before & After Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Request a Quote", href: "#quote" },
    { name: "Contact", href: "#contact" },
    { name: "Back to Top", href: "#home" },
  ];

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
    <footer
      style={{
        background: "linear-gradient(180deg, #050505 0%, #000000 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container" style={{ paddingTop: "70px", paddingBottom: "28px" }}>
        {/* Top CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={ctaBarStyle}
        >
          <div>
            <div style={ctaEyebrowStyle}>Ready to get started?</div>
            <h2 style={ctaTitleStyle}>Book your next detail with confidence</h2>
            <p style={ctaTextStyle}>
              Choose your package, find your vehicle size, and request service online.
            </p>
          </div>

          <a href="#booking" style={ctaButtonStyle}>
            Go to Booking
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr 0.8fr 1fr",
            gap: "28px",
            marginTop: "34px",
          }}
          className="footer-grid"
        >
          {/* Brand / Summary */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={cardStyle}
          >
            <div style={brandWrapStyle}>
              <div style={logoStyle}>M</div>
              <div>
                <div style={brandTitleStyle}>Master&apos;s Auto Detail</div>
                <div style={brandSubStyle}>Chico, California</div>
              </div>
            </div>

            <p style={brandTextStyle}>
              Professional detailing, paint correction, ceramic coating, and vehicle
              care designed to help customers understand pricing, book faster, and
              keep their vehicles looking their best.
            </p>

            <div style={contactMiniListStyle}>
              <a href="tel:5303212936" style={miniLinkStyle}>
                <Phone size={16} />
                (530) 321-2936
              </a>

              <a href="mailto:mastersautodetail@yahoo.com" style={miniLinkStyle}>
                <Mail size={16} />
                mastersautodetail@yahoo.com
              </a>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            style={cardStyle}
          >
            <h3 style={columnTitleStyle}>Services</h3>
            <div style={linkColumnStyle}>
              {serviceLinks.map((link) => (
                <a key={link.name} href={link.href} style={footerLinkStyle}>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            style={cardStyle}
          >
            <h3 style={columnTitleStyle}>Explore</h3>
            <div style={linkColumnStyle}>
              {companyLinks.map((link) => (
                <a key={link.name} href={link.href} style={footerLinkStyle}>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact / Hours */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            style={cardStyle}
          >
            <h3 style={columnTitleStyle}>Contact</h3>

            <div style={infoBlockStyle}>
              <div style={infoRowStyle}>
                <MapPin size={16} color="#ef4444" />
                <span style={infoTextStyle}>
                  636 Nord Ave Ste A
                  <br />
                  Chico, CA 95928
                </span>
              </div>

              <div style={infoRowStyle}>
                <Clock3 size={16} color="#ef4444" />
                <div style={{ display: "grid", gap: "4px" }}>
                  {businessHours.map((hour) => (
                    <span key={hour} style={hourTextStyle}>
                      {hour}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div style={bottomBarStyle}>
          <p style={copyrightStyle}>
            © {currentYear} Master&apos;s Auto Detail. All rights reserved.
          </p>

          <div style={bottomLinksStyle}>
            <a href="#faq" style={bottomLinkStyle}>
              FAQ
            </a>
            <a href="#contact" style={bottomLinkStyle}>
              Contact
            </a>
            <a href="#home" style={bottomLinkStyle}>
              Back to Top
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1050px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 760px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

/* Styles */
const ctaBarStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "30px",
  background: "linear-gradient(180deg, rgba(22,22,22,0.98) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap",
};

const ctaEyebrowStyle = {
  color: "#f87171",
  fontWeight: "800",
  fontSize: "0.84rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "10px",
};

const ctaTitleStyle = {
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "900",
  lineHeight: 1.1,
  marginBottom: "10px",
};

const ctaTextStyle = {
  color: "#d1d5db",
  lineHeight: 1.7,
  fontSize: "1rem",
  margin: 0,
};

const ctaButtonStyle = {
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
  whiteSpace: "nowrap",
};

const cardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "26px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "26px",
};

const brandWrapStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "18px",
};

const logoStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #ff2a2a 0%, #b30000 100%)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "900",
  fontSize: "1.35rem",
  boxShadow: "0 14px 28px rgba(255, 0, 0, 0.22)",
};

const brandTitleStyle = {
  color: "#fff",
  fontWeight: "800",
  fontSize: "1.1rem",
};

const brandSubStyle = {
  color: "#9ca3af",
  fontSize: "0.88rem",
  marginTop: "3px",
};

const brandTextStyle = {
  color: "#d1d5db",
  lineHeight: 1.8,
  fontSize: "0.97rem",
  marginBottom: "18px",
};

const contactMiniListStyle = {
  display: "grid",
  gap: "10px",
};

const miniLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "0.94rem",
};

const columnTitleStyle = {
  color: "#fff",
  fontSize: "1.1rem",
  fontWeight: "800",
  marginBottom: "16px",
};

const linkColumnStyle = {
  display: "grid",
  gap: "10px",
};

const footerLinkStyle = {
  color: "#d1d5db",
  textDecoration: "none",
  fontSize: "0.95rem",
  lineHeight: 1.7,
};

const infoBlockStyle = {
  display: "grid",
  gap: "18px",
};

const infoRowStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
};

const infoTextStyle = {
  color: "#e5e7eb",
  fontSize: "0.95rem",
  lineHeight: 1.7,
};

const hourTextStyle = {
  color: "#d1d5db",
  fontSize: "0.9rem",
  lineHeight: 1.55,
};

const bottomBarStyle = {
  marginTop: "26px",
  paddingTop: "22px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
  flexWrap: "wrap",
  alignItems: "center",
};

const copyrightStyle = {
  color: "#9ca3af",
  fontSize: "0.9rem",
  lineHeight: 1.6,
  margin: 0,
};

const bottomLinksStyle = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const bottomLinkStyle = {
  color: "#d1d5db",
  textDecoration: "none",
  fontSize: "0.92rem",
};

export default Footer;