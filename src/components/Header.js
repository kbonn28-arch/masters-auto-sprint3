import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header style={headerStyle}>
        <a href="#top" style={brandStyle}>
          <div style={logoCircleStyle}>M</div>
          <span style={brandTextStyle}>Master&apos;s Auto Detail</span>
        </a>

        <nav style={desktopNavStyle}>
          <a href="#services" style={navLinkStyle}>Services</a>
          <a href="#pricing" style={navLinkStyle}>Pricing</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
          <a href="#booking" style={primaryButtonStyle}>Request Quote</a>
        </nav>

        <button
          onClick={() => setMenuOpen(true)}
          style={menuButtonStyle}
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>

      {menuOpen && (
        <div style={overlayStyle}>
          <div style={mobilePanelStyle}>
            <div style={mobileTopRowStyle}>
              <div style={brandStyle}>
                <div style={logoCircleStyle}>M</div>
                <span style={brandTextStyle}>Master&apos;s Auto Detail</span>
              </div>

              <button
                onClick={closeMenu}
                style={closeButtonStyle}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div style={mobileLinksStyle}>
              <a href="#services" style={mobileLinkStyle} onClick={closeMenu}>
                Auto Detailing
              </a>
              <a href="#services" style={mobileLinkStyle} onClick={closeMenu}>
                Services
              </a>
              <a href="#ceramic" style={mobileLinkStyle} onClick={closeMenu}>
                Ceramic Coatings
              </a>
              <a href="#pricing" style={mobileLinkStyle} onClick={closeMenu}>
                Pricing
              </a>
              <a href="#sizing" style={mobileLinkStyle} onClick={closeMenu}>
                Sizing Guide
              </a>
              <a href="#contact" style={mobileLinkStyle} onClick={closeMenu}>
                Contact
              </a>
            </div>

            <a href="#booking" style={mobileCtaStyle} onClick={closeMenu}>
              Request Quote
            </a>

            <a href="tel:5303212936" style={phoneLinkStyle}>
              (530) 321-2936
            </a>
          </div>
        </div>
      )}
    </>
  );
}

const headerStyle = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "18px 24px",
  backgroundColor: "#000",
  borderBottom: "1px solid #151515",
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  textDecoration: "none",
};

const logoCircleStyle = {
  width: "56px",
  height: "56px",
  borderRadius: "999px",
  backgroundColor: "#ef2b2d",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  fontWeight: "800",
  flexShrink: 0,
};

const brandTextStyle = {
  color: "#fff",
  fontWeight: "800",
  fontSize: "2rem",
  lineHeight: 1,
};

const desktopNavStyle = {
  display: "flex",
  alignItems: "center",
  gap: "22px",
};

const navLinkStyle = {
  color: "#e8e8e8",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "1rem",
};

const primaryButtonStyle = {
  backgroundColor: "#ff1d1d",
  color: "#fff",
  textDecoration: "none",
  padding: "12px 20px",
  borderRadius: "999px",
  fontWeight: "800",
};

const menuButtonStyle = {
  background: "transparent",
  color: "#fff",
  border: "none",
  fontSize: "1.8rem",
  cursor: "pointer",
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.88)",
  zIndex: 2000,
};

const mobilePanelStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
  color: "#fff",
  padding: "28px 26px 34px",
  boxSizing: "border-box",
};

const mobileTopRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "22px",
  borderBottom: "1px solid #1a1a1a",
};

const closeButtonStyle = {
  background: "transparent",
  color: "#ff7373",
  border: "none",
  fontSize: "2rem",
  cursor: "pointer",
};

const mobileLinksStyle = {
  display: "grid",
  gap: "28px",
  paddingTop: "38px",
  paddingBottom: "40px",
};

const mobileLinkStyle = {
  color: "#e8e8e8",
  textDecoration: "none",
  fontSize: "1.5rem",
  fontWeight: "700",
};

const mobileCtaStyle = {
  display: "block",
  width: "100%",
  textAlign: "center",
  backgroundColor: "#ef2b2d",
  color: "#fff",
  textDecoration: "none",
  padding: "22px",
  borderRadius: "999px",
  fontSize: "1.4rem",
  fontWeight: "800",
  boxSizing: "border-box",
};

const phoneLinkStyle = {
  display: "inline-block",
  marginTop: "28px",
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.15rem",
  fontWeight: "700",
  opacity: 0.9,
};