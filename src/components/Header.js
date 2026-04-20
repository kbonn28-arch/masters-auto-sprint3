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

              <button onClick={closeMenu} style={closeButtonStyle}>
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
    </>
  );
}