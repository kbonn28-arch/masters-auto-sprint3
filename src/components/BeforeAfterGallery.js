import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import wrxExteriorBefore from "../assets/gallery/wrx-exterior-before.png";
import wrxExteriorAfter from "../assets/gallery/wrx-exterior-after.png";
import wrxInteriorBefore from "../assets/gallery/wrx-interior-before.png";
import wrxInteriorAfter from "../assets/gallery/wrx-interior-after.png";
import chargerBefore from "../assets/gallery/charger-before.png";
import chargerAfter from "../assets/gallery/charger-after.png";
import benzBefore from "../assets/gallery/benz-before.png";
import benzAfter from "../assets/gallery/benz-after.png";

const galleryItems = [
  {
    id: 1,
    category: "Exterior",
    title: "Subaru WRX Exterior Detail",
    before: wrxExteriorBefore,
    after: wrxExteriorAfter,
    description:
      "Full exterior cleanup and finish restoration with noticeably deeper gloss and cleaner paint.",
  },
  {
    id: 2,
    category: "Interior",
    title: "Subaru WRX Interior Detail",
    before: wrxInteriorBefore,
    after: wrxInteriorAfter,
    description:
      "Interior refresh with cleaner surfaces, improved floor area appearance, and a more finished cabin.",
  },
  {
    id: 3,
    category: "Exterior",
    title: "Dodge Charger Exterior Detail",
    before: chargerBefore,
    after: chargerAfter,
    description:
      "Exterior transformation showing stronger color pop, improved shine, and a cleaner overall finish.",
  },
  {
    id: 4,
    category: "Exterior",
    title: "Mercedes Exterior Detail",
    before: benzBefore,
    after: benzAfter,
    description:
      "Paint cleaned and refined for a darker, glossier finish with a more premium appearance.",
  },
];

export default function BeforeAfterGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAfter, setShowAfter] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowAfter(false);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowAfter(false);
  };

  const showNextImage = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
    setSelectedItem(galleryItems[nextIndex]);
    setShowAfter(false);
  };

  const showPrevImage = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    setSelectedItem(galleryItems[prevIndex]);
    setShowAfter(false);
  };

  return (
    <section
      id="gallery"
      className="section"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #050505 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Before & After Gallery</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real results from <span className="text-red-500">real vehicles</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            See the difference professional detailing can make on paint, gloss,
            interior cleanup, and overall presentation.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "24px",
          }}
          className="gallery-grid"
        >
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => openModal(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              style={{
                ...cardStyle,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div style={imageWrapStyle}>
                <img
                  src={item.before}
                  alt={`${item.title} before detailing`}
                  style={imageStyle}
                />

                <div style={beforeBadgeStyle}>Before</div>
              </div>

              <div style={{ padding: "22px" }}>
                <div style={categoryStyle}>{item.category}</div>
                <h3 style={titleStyle}>{item.title}</h3>
                <p style={descriptionStyle}>{item.description}</p>

                <div style={ctaStyle}>
                  View Before & After
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div style={modalOverlayStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} style={closeButtonStyle} aria-label="Close gallery">
              <X size={20} />
            </button>

            <div style={modalTopStyle}>
              <div>
                <div style={categoryStyle}>{selectedItem.category}</div>
                <h3 style={{ ...titleStyle, marginBottom: "8px" }}>{selectedItem.title}</h3>
                <p style={{ ...descriptionStyle, marginBottom: 0 }}>{selectedItem.description}</p>
              </div>

              <div style={toggleWrapStyle}>
                <button
                  type="button"
                  onClick={() => setShowAfter(false)}
                  style={{
                    ...toggleButtonStyle,
                    ...(showAfter ? {} : activeToggleStyle),
                  }}
                >
                  Before
                </button>
                <button
                  type="button"
                  onClick={() => setShowAfter(true)}
                  style={{
                    ...toggleButtonStyle,
                    ...(showAfter ? activeToggleStyle : {}),
                  }}
                >
                  After
                </button>
              </div>
            </div>

            <div style={modalImageWrapStyle}>
              <img
                src={showAfter ? selectedItem.after : selectedItem.before}
                alt={`${selectedItem.title} ${showAfter ? "after" : "before"} detailing`}
                style={modalImageStyle}
              />

              <div style={modalBadgeStyle}>{showAfter ? "After" : "Before"}</div>
            </div>

            <div style={navButtonsWrapStyle}>
              <button type="button" onClick={showPrevImage} style={navButtonStyle}>
                <ArrowLeft size={18} />
                Previous
              </button>

              <button
                type="button"
                onClick={() => setShowAfter((prev) => !prev)}
                style={compareButtonStyle}
              >
                Show {showAfter ? "Before" : "After"}
              </button>

              <button type="button" onClick={showNextImage} style={navButtonStyle}>
                Next
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* Styles */
const cardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "26px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  overflow: "hidden",
  color: "#fff",
};

const imageWrapStyle = {
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 10",
  overflow: "hidden",
  backgroundColor: "#0d0d0d",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const beforeBadgeStyle = {
  position: "absolute",
  top: "16px",
  left: "16px",
  background: "rgba(0,0,0,0.75)",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: "999px",
  fontWeight: "800",
  fontSize: "0.82rem",
  letterSpacing: "0.04em",
};

const categoryStyle = {
  color: "#f87171",
  fontWeight: "800",
  fontSize: "0.84rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "10px",
};

const titleStyle = {
  color: "#fff",
  fontSize: "1.45rem",
  fontWeight: "800",
  lineHeight: 1.2,
  marginBottom: "10px",
};

const descriptionStyle = {
  color: "#cbd5e1",
  fontSize: "0.96rem",
  lineHeight: 1.7,
  marginBottom: "18px",
};

const ctaStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: "#fff",
  fontWeight: "800",
  fontSize: "0.95rem",
};

const modalOverlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.88)",
  zIndex: 5000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const modalContentStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "1100px",
  borderRadius: "28px",
  background: "#0a0a0a",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "24px",
  color: "#fff",
};

const closeButtonStyle = {
  position: "absolute",
  top: "16px",
  right: "16px",
  width: "44px",
  height: "44px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalTopStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  marginBottom: "18px",
  paddingRight: "56px",
  flexWrap: "wrap",
};

const toggleWrapStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "999px",
  padding: "6px",
  height: "fit-content",
};

const toggleButtonStyle = {
  border: "none",
  background: "transparent",
  color: "#d1d5db",
  padding: "10px 16px",
  borderRadius: "999px",
  fontWeight: "800",
  cursor: "pointer",
};

const activeToggleStyle = {
  background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
  color: "#fff",
};

const modalImageWrapStyle = {
  position: "relative",
  width: "100%",
  borderRadius: "22px",
  overflow: "hidden",
  backgroundColor: "#000",
};

const modalImageStyle = {
  width: "100%",
  maxHeight: "68vh",
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
};

const modalBadgeStyle = {
  position: "absolute",
  top: "16px",
  left: "16px",
  background: "rgba(0,0,0,0.75)",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: "999px",
  fontWeight: "800",
  fontSize: "0.82rem",
  letterSpacing: "0.04em",
};

const navButtonsWrapStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  marginTop: "18px",
  flexWrap: "wrap",
};

const navButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
  padding: "14px 18px",
  borderRadius: "999px",
  fontWeight: "800",
  cursor: "pointer",
};

const compareButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
  color: "#fff",
  padding: "14px 20px",
  borderRadius: "999px",
  fontWeight: "800",
  cursor: "pointer",
  boxShadow: "0 16px 34px rgba(255, 0, 0, 0.22)",
};