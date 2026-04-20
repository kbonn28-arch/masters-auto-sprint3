import React from "react";
import { motion } from "framer-motion";
import { Car, Truck, ShieldCheck } from "lucide-react";

const SizingGuide = () => {
  const vehicleSizes = [
    {
      category: "Extra Small",
      type: "Compact cars",
      examples: "Mini Cooper, Mazda Miata, Honda Fit",
      description: "Smallest vehicles with compact body size and shorter cabin space.",
    },
    {
      category: "Small",
      type: "Sedans",
      examples: "Honda Civic, Toyota Corolla, Nissan Altima",
      description: "Standard sedans and similar daily-driver passenger vehicles.",
    },
    {
      category: "Medium",
      type: "Crossovers / Small SUVs",
      examples: "Honda CR-V, Toyota RAV4, Ford Escape",
      description: "Compact SUVs and crossovers with additional cargo and cabin room.",
    },
    {
      category: "Large",
      type: "Trucks / Larger SUVs",
      examples: "Ford F-150, Chevy Silverado, Toyota 4Runner",
      description: "Pickup trucks and larger SUVs that require more surface and interior coverage.",
    },
    {
      category: "Extra Large",
      type: "Full-Size SUVs / Vans",
      examples: "Chevy Tahoe, Suburban, Ford Expedition, large vans",
      description: "Oversized vehicles with the most exterior area and interior volume.",
    },
  ];

  return (
    <section
      id="sizing"
      className="section"
      style={{
        background: "linear-gradient(180deg, #050505 0%, #000000 100%)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Vehicle Sizing Guide</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Find the right <span className="text-red-500">vehicle size</span> before you book
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Pricing is based on vehicle size so you can understand your starting price
            before submitting a booking request.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gap: "18px",
            marginBottom: "30px",
          }}
        >
          {vehicleSizes.map((size, index) => (
            <motion.div
              key={size.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "24px",
                background:
                  "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
                padding: "24px",
                display: "grid",
                gridTemplateColumns: "220px 1fr 1fr",
                gap: "22px",
              }}
              className="sizing-guide-row"
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    borderRadius: "999px",
                    background: "rgba(239,68,68,0.10)",
                    border: "1px solid rgba(239,68,68,0.18)",
                    color: "#f87171",
                    fontWeight: "800",
                    fontSize: "0.84rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "14px",
                  }}
                >
                  {size.category === "Large" || size.category === "Extra Large" ? (
                    <Truck size={16} />
                  ) : (
                    <Car size={16} />
                  )}
                  {size.category}
                </div>

                <h3
                  style={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    fontWeight: "800",
                    marginBottom: "8px",
                  }}
                >
                  {size.type}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: 1.65,
                    fontSize: "0.95rem",
                    margin: 0,
                  }}
                >
                  {size.description}
                </p>
              </div>

              <div>
                <div
                  style={{
                    color: "#fca5a5",
                    fontWeight: "800",
                    fontSize: "0.86rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "10px",
                  }}
                >
                  Common Examples
                </div>
                <p
                  style={{
                    color: "#f3f4f6",
                    fontSize: "0.96rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {size.examples}
                </p>
              </div>

              <div
                style={{
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "18px",
                  alignSelf: "stretch",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <ShieldCheck size={18} color="#ef4444" style={{ marginTop: "3px" }} />
                  <div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: "800",
                        fontSize: "0.98rem",
                        marginBottom: "6px",
                      }}
                    >
                      Pricing Tip
                    </div>
                    <p
                      style={{
                        color: "#d1d5db",
                        lineHeight: 1.65,
                        fontSize: "0.92rem",
                        margin: 0,
                      }}
                    >
                      If your vehicle is lifted, oversized, or between categories,
                      choose the larger size for the most accurate starting estimate.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "22px",
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.16)",
            padding: "22px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#fca5a5",
              fontWeight: "700",
              lineHeight: 1.7,
              fontSize: "0.98rem",
              margin: 0,
            }}
          >
            Final pricing may vary based on vehicle condition, heavy buildup, or specialty
            service needs. Use this guide to find the closest size before booking.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .sizing-guide-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SizingGuide;