import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(220,38,38,0.18), transparent 28%), linear-gradient(180deg, #000000 0%, #050505 45%, #0b0b0b 100%)",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "360px",
          height: "360px",
          background: "rgba(255, 0, 0, 0.12)",
          filter: "blur(90px)",
          borderRadius: "999px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "110px 20px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#ff5a5a",
                fontWeight: "800",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: "0.82rem",
                marginBottom: "22px",
              }}
            >
              <Sparkles size={16} />
              Auto Detailing in Chico, CA
            </div>

            <h1
              style={{
                fontSize: "clamp(2.7rem, 6vw, 5.8rem)",
                lineHeight: 0.98,
                margin: "0 0 18px 0",
                fontWeight: "900",
                letterSpacing: "-0.03em",
                color: "#ffffff",
                maxWidth: "760px",
              }}
            >
              Get that showroom feeling
              <span style={{ color: "#ef4444", display: "block" }}>
                all over again.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#d1d5db",
                maxWidth: "700px",
                margin: "0 0 30px 0",
              }}
            >
              Professional detailing, paint correction, ceramic coating, and
              interior care designed to help Chico drivers restore shine,
              protect their investment, and book with confidence.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginBottom: "28px",
              }}
            >
              <a href="#booking" style={primaryButtonStyle}>
                Book Your Detail
                <ArrowRight size={18} />
              </a>

              <a href="#pricing" style={secondaryButtonStyle}>
                View Pricing
              </a>

              <a href="tel:5303212936" style={callButtonStyle}>
                <PhoneCall size={18} />
                Call Now
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "12px",
                maxWidth: "760px",
              }}
              className="hero-trust-grid"
            >
              <div style={miniCardStyle}>
                <ShieldCheck size={18} color="#ef4444" />
                <div>
                  <div style={miniCardTitleStyle}>Vehicle Protection</div>
                  <div style={miniCardTextStyle}>
                    Detailing and ceramic options
                  </div>
                </div>
              </div>

              <div style={miniCardStyle}>
                <Sparkles size={18} color="#ef4444" />
                <div>
                  <div style={miniCardTitleStyle}>Clear Pricing</div>
                  <div style={miniCardTextStyle}>
                    Size-based service options
                  </div>
                </div>
              </div>

              <div style={miniCardStyle}>
                <PhoneCall size={18} color="#ef4444" />
                <div>
                  <div style={miniCardTitleStyle}>Easy Booking</div>
                  <div style={miniCardTextStyle}>
                    Quote or reserve online
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div style={featureCardWrapStyle}>
              <div style={featureCardStyle}>
                <p style={featureEyebrowStyle}>Popular Services</p>
                <h3 style={featureHeadingStyle}>Built for results drivers notice</h3>

                <div style={{ display: "grid", gap: "14px", marginTop: "22px" }}>
                  <div style={serviceFeatureRowStyle}>
                    <div style={featureDotStyle} />
                    <div>
                      <div style={serviceFeatureTitleStyle}>Basic Detail</div>
                      <div style={serviceFeatureTextStyle}>
                        Hand wash, wax, interior wipe down, windows, and vacuum
                      </div>
                    </div>
                  </div>

                  <div style={serviceFeatureRowStyle}>
                    <div style={featureDotStyle} />
                    <div>
                      <div style={serviceFeatureTitleStyle}>Full Detail</div>
                      <div style={serviceFeatureTextStyle}>
                        Deep cleaning, clay bar treatment, polish, and protection
                      </div>
                    </div>
                  </div>

                  <div style={serviceFeatureRowStyle}>
                    <div style={featureDotStyle} />
                    <div>
                      <div style={serviceFeatureTitleStyle}>Ceramic Coating</div>
                      <div style={serviceFeatureTextStyle}>
                        Long-term gloss, protection, and easier maintenance
                      </div>
                    </div>
                  </div>
                </div>

                <div style={promoBannerStyle}>
                  New maintenance plan customers receive a 1-year ceramic
                  upgrade at no additional cost.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }

          .hero-trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

const primaryButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "16px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "800",
  fontSize: "1rem",
  background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
  boxShadow: "0 16px 34px rgba(255, 0, 0, 0.22)",
};

const secondaryButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "800",
  fontSize: "1rem",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.03)",
};

const callButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "16px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "800",
  fontSize: "1rem",
  border: "1px solid rgba(239,68,68,0.28)",
  background: "rgba(239,68,68,0.08)",
};

const miniCardStyle = {
  display: "flex",
  gap: "12px",
  alignItems: "flex-start",
  padding: "16px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.035)",
  border: "1px solid rgba(255,255,255,0.06)",
};

const miniCardTitleStyle = {
  fontSize: "0.96rem",
  fontWeight: "800",
  color: "#fff",
  marginBottom: "3px",
};

const miniCardTextStyle = {
  fontSize: "0.88rem",
  lineHeight: 1.5,
  color: "#9ca3af",
};

const featureCardWrapStyle = {
  display: "flex",
  justifyContent: "center",
};

const featureCardStyle = {
  width: "100%",
  maxWidth: "440px",
  padding: "30px",
  borderRadius: "28px",
  background: "linear-gradient(180deg, rgba(20,20,20,0.96) 0%, rgba(10,10,10,0.98) 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
};

const featureEyebrowStyle = {
  color: "#ef4444",
  fontWeight: "800",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontSize: "0.8rem",
  margin: "0 0 10px 0",
};

const featureHeadingStyle = {
  fontSize: "2rem",
  lineHeight: 1.1,
  fontWeight: "900",
  margin: 0,
  color: "#fff",
};

const serviceFeatureRowStyle = {
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

const featureDotStyle = {
  width: "12px",
  height: "12px",
  borderRadius: "999px",
  background: "#ef4444",
  marginTop: "7px",
  flexShrink: 0,
  boxShadow: "0 0 0 6px rgba(239,68,68,0.15)",
};

const serviceFeatureTitleStyle = {
  color: "#fff",
  fontWeight: "800",
  marginBottom: "4px",
  fontSize: "1rem",
};

const serviceFeatureTextStyle = {
  color: "#c4c4c4",
  fontSize: "0.94rem",
  lineHeight: 1.6,
};

const promoBannerStyle = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "rgba(239,68,68,0.10)",
  border: "1px solid rgba(239,68,68,0.18)",
  color: "#fca5a5",
  fontWeight: "700",
  lineHeight: 1.6,
  fontSize: "0.92rem",
};

export default Hero;