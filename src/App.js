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
  const [showAdmin, setShowAdmin] = useState(false);

  // 👉 ADMIN ROUTE (SAFE — DOES NOT TOUCH MAIN SITE)
  if (window.location.pathname === "/admin") {
    return <AdminPanel onLogout={() => setShowAdmin(false)} />;
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