import React from "react";

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
  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      
      {/* HEADER */}
      <Header />

      {/* FLOATING CALL BUTTON (mobile conversion boost) */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 999 }}>
        <CallButton size="large" />
      </div>

      {/* HERO */}
      <Hero />

      {/* TRUST / ABOUT */}
      <About />

      {/* CORE SERVICES */}
      <Services />

      {/* PRICING + BOOKING (MAIN MONEY SECTION) */}
      <Pricing />

      {/* VEHICLE SIZE GUIDE */}
      <SizingGuide />

      {/* CERAMIC UPSELL */}
      <CeramicCoating />

      {/* MAINTENANCE CLUB (RECURRING REVENUE) */}
      <MaintenanceClub />

      {/* BEFORE / AFTER (TRUST BUILDER) */}
      <BeforeAfterGallery />

      {/* REVIEWS */}
      <Reviews />

      {/* FAQ (REDUCE CALLS) */}
      <FAQ />

      {/* QUOTE ENTRY POINT */}
      <QuoteForm />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;