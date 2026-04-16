import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#050505",
        color: "#fff",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "22px",
        }}
      >
        <div style={cardStyle}>
          <p style={eyebrowStyle}>Contact</p>
          <h2 style={titleStyle}>Ready to book your detail?</h2>
          <p style={textStyle}>
            The fastest way to reserve your spot is through the online booking form.
            You can also call if you have questions before booking.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "24px" }}>
            <a href="#booking" style={primaryButtonStyle}>
              Book Online
            </a>

            <a href="tel:5303212936" style={secondaryButtonStyle}>
              Call (530) 321-2936
            </a>
          </div>
        </div>

        <div style={cardStyle}>
          <h3 style={subTitleStyle}>Service Area</h3>
          <p style={textStyle}>
            Chico and surrounding areas.
          </p>

          <h3 style={{ ...subTitleStyle, marginTop: "24px" }}>Phone</h3>
          <p style={textStyle}>
            <a href="tel:5303212936" style={inlineLinkStyle}>
              (530) 321-2936
            </a>
          </p>

          <h3 style={{ ...subTitleStyle, marginTop: "24px" }}>Email</h3>
          <p style={textStyle}>
            <a href="mailto:mastersautodetail@yahoo.com" style={inlineLinkStyle}>
              mastersautodetail@yahoo.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  backgroundColor: "#0d0d0d",
  border: "1px solid #1f1f1f",
  borderRadius: "22px",
  padding: "28px",
};

const eyebrowStyle = {
  color: "#ff3b3b",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: "800",
  fontSize: "0.95rem",
  marginBottom: "10px",
};

const titleStyle = {
  fontSize: "2.2rem",
  lineHeight: 1.15,
  margin: "0 0 12px 0",
  fontWeight: "800",
};

const subTitleStyle = {
  fontSize: "1.2rem",
  margin: 0,
  fontWeight: "800",
};

const textStyle = {
  color: "#d5d5d5",
  fontSize: "1.05rem",
  lineHeight: 1.7,
  margin: "10px 0 0 0",
};

const primaryButtonStyle = {
  display: "inline-block",
  textAlign: "center",
  backgroundColor: "#ff1d1d",
  color: "#fff",
  textDecoration: "none",
  padding: "16px 22px",
  borderRadius: "999px",
  fontWeight: "800",
};

const secondaryButtonStyle = {
  display: "inline-block",
  textAlign: "center",
  backgroundColor: "transparent",
  color: "#fff",
  textDecoration: "none",
  padding: "16px 22px",
  borderRadius: "999px",
  fontWeight: "700",
  border: "1px solid #2b2b2b",
  opacity: 0.92,
};

const inlineLinkStyle = {
  color: "#fff",
  textDecoration: "none",
};