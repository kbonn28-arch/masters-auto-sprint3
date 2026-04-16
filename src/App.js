import React from "react";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import QuoteForm from "./components/QuoteForm";

function App() {
  return (
    <div id="top" style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Header />

      <section
        id="hero"
        style={{
          padding: "100px 20px 80px",
          background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(8,8,8,1) 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              color: "#ff3b3b",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: "800",
              marginBottom: "14px",
            }}
          >
            Premium Mobile Detailing
          </p>

          <h1
            style={{
              fontSize: "3.4rem",
              lineHeight: 1.05,
              margin: "0 0 18px 0",
              fontWeight: "900",
            }}
          >
            Master&apos;s Auto Detail
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 28px",
              color: "#d1d1d1",
              fontSize: "1.15rem",
              lineHeight: 1.7,
            }}
          >
            Interior and exterior detailing, add-ons, and ceramic protection with
            one clean online booking flow.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a href="#booking" style={primaryBtn}>
              Book Now
            </a>
            <a href="#pricing" style={secondaryBtn}>
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          padding: "80px 20px",
          backgroundColor: "#050505",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Services</h2>

          <div style={cardGrid}>
            <div style={serviceCard}>
              <h3 style={cardTitle}>Interior Detail</h3>
              <p style={cardText}>
                Vacuum, wipe down surfaces, windows, and deep interior refresh.
              </p>
            </div>

            <div style={serviceCard}>
              <h3 style={cardTitle}>Exterior Detail</h3>
              <p style={cardText}>
                Hand wash, wheels, trim, body finish, and shine enhancement.
              </p>
            </div>

            <div style={serviceCard}>
              <h3 style={cardTitle}>Add-On Services</h3>
              <p style={cardText}>
                Engine bay detail, pet hair removal, and headlight restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ceramic"
        style={{
          padding: "80px 20px",
          backgroundColor: "#000",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Ceramic Coatings</h2>
          <div style={wideCard}>
            <p style={cardText}>
              Ask about ceramic coating packages for longer-lasting gloss,
              protection, and easier maintenance.
            </p>
            <a href="#booking" style={primaryBtn}>
              Request Ceramic Quote
            </a>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        style={{
          padding: "80px 20px",
          backgroundColor: "#050505",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Pricing</h2>

          <div style={cardGrid}>
            <div style={priceCard}>
              <p style={priceLabel}>Cars / Sedans</p>
              <h3 style={priceValue}>$159</h3>
              <p style={cardText}>Honda Civic, Toyota Corolla</p>
              <a href="#booking" style={primaryBtnFull}>
                Book Now
              </a>
            </div>

            <div style={priceCard}>
              <p style={priceLabel}>Crossovers</p>
              <h3 style={priceValue}>$249</h3>
              <p style={cardText}>Honda CR-V, Toyota RAV4</p>
              <a href="#booking" style={primaryBtnFull}>
                Book Now
              </a>
            </div>

            <div style={priceCard}>
              <p style={priceLabel}>Trucks / SUVs</p>
              <h3 style={priceValue}>Custom</h3>
              <p style={cardText}>Larger vehicles priced by size and condition</p>
              <a href="#booking" style={primaryBtnFull}>
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sizing"
        style={{
          padding: "80px 20px",
          backgroundColor: "#000",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Sizing Guide</h2>
          <div style={wideCard}>
            <p style={cardText}>
              Sedan = smaller cars. SUV = compact and midsize SUVs. Truck / Extra Large
              = large SUVs, trucks, vans, and oversized vehicles.
            </p>
          </div>
        </div>
      </section>

      <QuoteForm />
      <Pricing />
      <Contact />
    </div>
  );
}

const sectionTitle = {
  fontSize: "2.4rem",
  fontWeight: "900",
  margin: "0 0 28px 0",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "22px",
};

const serviceCard = {
  backgroundColor: "#0d0d0d",
  border: "1px solid #1d1d1d",
  borderRadius: "22px",
  padding: "26px",
};

const priceCard = {
  backgroundColor: "#0b1020",
  border: "1px solid #182033",
  borderRadius: "22px",
  padding: "26px",
};

const wideCard = {
  backgroundColor: "#0d0d0d",
  border: "1px solid #1d1d1d",
  borderRadius: "22px",
  padding: "30px",
};

const cardTitle = {
  fontSize: "1.35rem",
  fontWeight: "800",
  margin: "0 0 12px 0",
};

const cardText = {
  color: "#d4d4d4",
  fontSize: "1.05rem",
  lineHeight: 1.7,
  margin: 0,
};

const priceLabel = {
  color: "#ff5b5b",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontWeight: "800",
  margin: "0 0 10px 0",
};

const priceValue = {
  fontSize: "3rem",
  fontWeight: "900",
  margin: "0 0 10px 0",
};

const primaryBtn = {
  display: "inline-block",
  backgroundColor: "#ff1d1d",
  color: "#fff",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "999px",
  fontWeight: "800",
};

const primaryBtnFull = {
  display: "block",
  textAlign: "center",
  marginTop: "18px",
  backgroundColor: "#ff1d1d",
  color: "#fff",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "999px",
  fontWeight: "800",
};

const secondaryBtn = {
  display: "inline-block",
  backgroundColor: "transparent",
  color: "#fff",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "999px",
  fontWeight: "800",
  border: "1px solid #2b2b2b",
};

export default App;