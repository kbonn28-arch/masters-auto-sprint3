import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#booking" },
    { label: "Sizing Guide", href: "#sizing" },
    { label: "Ceramic Coating", href: "#ceramic" },
    { label: "Maintenance Club", href: "#maintenance-club" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header style={headerStyle}>
        <div style={innerStyle}>
          <a href="#home" style={brandStyle} onClick={closeMenu}>
            <div style={logoCircleStyle}>M</div>
            <div style={brandTextWrapStyle}>
              <span style={brandTextStyle}>Master&apos;s Auto Detail</span>
              <span style={brandSubTextStyle}>Chico, California</span>
            </div>
          </a>

          <nav className="masters-auto-desktop-nav" style={desktopNavStyle}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} style={navLinkStyle}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="masters-auto-desktop-actions" style={desktopActionsStyle}>
            <a href="tel:5303212936" style={phoneButtonStyle}>
              Call (530) 321-2936
            </a>
            <a href="#booking" style={primaryButtonStyle}>
              Book Now
            </a>
          </div>

          <button
            className="masters-auto-menu-button"
            onClick={() => setMenuOpen(true)}
            style={menuButtonStyle}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div style={overlayStyle}>
          <div style={mobilePanelStyle}>
            <div style={mobileTopRowStyle}>
              <a href="#home" style={brandStyle} onClick={closeMenu}>
                <div style={logoCircleStyle}>M</div>
                <div style={brandTextWrapStyle}>
                  <span style={brandTextStyle}>Master&apos;s Auto Detail</span>
                  <span style={brandSubTextStyle}>Chico, California</span>
                </div>
              </a>

              <button onClick={closeMenu} style={closeButtonStyle} aria-label="Close menu">
                ✕
              </button>
            </div>

            <div style={mobileLinksStyle}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={mobileLinkStyle}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div style={mobileActionWrapStyle}>
              <a href="#booking" style={mobileCtaStyle} onClick={closeMenu}>
                Book Your Detail
              </a>

              <a href="tel:5303212936" style={mobilePhoneStyle}>
                Call (530) 321-2936
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .masters-auto-desktop-nav {
            display: none !important;
          }

          .masters-auto-desktop-actions {
            display: none !important;
          }

          .masters-auto-menu-button {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }
        }

        @media (min-width: 1101px) {
          .masters-auto-menu-button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

const headerStyle = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  width: "100%",
  background: "rgba(0, 0, 0, 0.92)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const innerStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "16px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  textDecoration: "none",
  flexShrink: 0,
};

const logoCircleStyle = {
  width: "48px",
  height: "48px",
  minWidth: "48px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #ff2a2a 0%, #b30000 100%)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.4rem",
  fontWeight: "900",
  boxShadow: "0 10px 30px rgba(255, 0, 0, 0.25)",
};

const brandTextWrapStyle = {
  display: "flex",
  flexDirection: "column",
  lineHeight: 1.1,
};

const brandTextStyle = {
  color: "#fff",
  fontWeight: "800",
  fontSize: "1.05rem",
  letterSpacing: "0.01em",
};

const brandSubTextStyle = {
  color: "#b3b3b3",
  fontSize: "0.78rem",
  marginTop: "3px",
};

const desktopNavStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  flex: 1,
  justifyContent: "center",
};

const navLinkStyle = {
  color: "#d8d8d8",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "0.95rem",
  transition: "color 0.2s ease",
};

const desktopActionsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const phoneButtonStyle = {
  color: "#fff",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.14)",
  padding: "12px 16px",
  borderRadius: "999px",
  fontWeight: "700",
  fontSize: "0.92rem",
  whiteSpace: "nowrap",
};

const primaryButtonStyle = {
  background: "linear-gradient(135deg, #ff2a2a 0%, #cc0000 100%)",
  color: "#fff",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: "800",
  fontSize: "0.95rem",
  whiteSpace: "nowrap",
  boxShadow: "0 10px 24px rgba(255, 0, 0, 0.25)",
};

const menuButtonStyle = {
  display: "none",
  backgroundColor: "transparent",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#fff",
  width: "46px",
  height: "46px",
  borderRadius: "12px",
  fontSize: "1.4rem",
  cursor: "pointer",
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.72)",
  zIndex: 2000,
  display: "flex",
  justifyContent: "flex-end",
};

const mobilePanelStyle = {
  width: "100%",
  maxWidth: "380px",
  height: "100%",
  backgroundColor: "#050505",
  borderLeft: "1px solid rgba(255,255,255,0.08)",
  padding: "24px 20px 28px",
  display: "flex",
  flexDirection: "column",
};

const mobileTopRowStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12px",
  marginBottom: "28px",
};

const closeButtonStyle = {
  backgroundColor: "transparent",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#fff",
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  fontSize: "1.2rem",
  cursor: "pointer",
  flexShrink: 0,
};

const mobileLinksStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

const mobileLinkStyle = {
  color: "#f2f2f2",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "1rem",
  padding: "14px 0",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const mobileActionWrapStyle = {
  marginTop: "28px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const mobileCtaStyle = {
  display: "block",
  textAlign: "center",
  background: "linear-gradient(135deg, #ff2a2a 0%, #cc0000 100%)",
  color: "#fff",
  textDecoration: "none",
  padding: "15px 18px",
  borderRadius: "999px",
  fontWeight: "800",
  fontSize: "1rem",
};

const mobilePhoneStyle = {
  display: "block",
  textAlign: "center",
  color: "#fff",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.14)",
  padding: "15px 18px",
  borderRadius: "999px",
  fontWeight: "700",
  fontSize: "1rem",
};