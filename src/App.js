import React, { useState } from "react";
import AdminPanel from "./components/AdminPanel";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import SizingGuide from "./components/SizingGuide";
import CeramicCoating from "./components/CeramicCoating";
import MaintenanceClub from "./components/MaintenanceClub";
import BeforeAfterGallery from "./components/BeforeAfterGallery";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import QuoteForm from "./components/QuoteForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleAdminLogin = () => {
    const password = prompt("Enter admin password:");

    if (password === "admin123") {
      setIsAdminAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  };

  // 👉 ADMIN ROUTE
  if (window.location.pathname === "/admin") {
    return isAdminAuthenticated ? (
      <AdminPanel onLogout={() => setIsAdminAuthenticated(false)} />
    ) : (
      <div
        style={{
          background: "#000",
          color: "#fff",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2>Admin Access Required</h2>
        <button
          onClick={handleAdminLogin}
          style={{
            padding: "14px 20px",
            borderRadius: "999px",
            border: "none",
            background: "#ff2a2a",
            color: "#fff",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Enter Admin Panel
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      
      {/* HEADER */}
      <Header />

      {/* FLOATING CALL BUTTON */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 999 }}>
        <CallButton size="large" />
      </div>

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* PRICING */}
      <Pricing />

      {/* SIZING */}
      <SizingGuide />

      {/* CERAMIC */}
      <CeramicCoating />

      {/* MAINTENANCE CLUB */}
      <MaintenanceClub />

      {/* GALLERY */}
      <BeforeAfterGallery />

      {/* REVIEWS */}
      <Reviews />

      {/* FAQ */}
      <FAQ />

      {/* QUOTE */}
      <QuoteForm />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;