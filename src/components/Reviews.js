import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck, Sparkles, Clock3 } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Michael R.",
      service: "Full Detail",
      title: "The finish looked incredible",
      text: "Communication was easy, the process was straightforward, and the vehicle looked dramatically better when it was done. The level of detail really stood out.",
    },
    {
      id: 2,
      name: "Sarah K.",
      service: "Basic Detail + Add-Ons",
      title: "Easy to understand and worth it",
      text: "The pricing was clear, the service options made sense, and I knew what I was booking. My vehicle came back cleaner, sharper, and much more polished.",
    },
    {
      id: 3,
      name: "James T.",
      service: "Maintenance Club",
      title: "Great option for regular upkeep",
      text: "Having a recurring service option makes it much easier to stay on top of cleaning. It saves time and keeps the vehicle looking better all month.",
    },
    {
      id: 4,
      name: "Lisa M.",
      service: "Ceramic Coating",
      title: "The gloss difference was huge",
      text: "After the ceramic work, the paint looked deeper and cleaner, and the vehicle was much easier to maintain. It gave the car a more premium finish.",
    },
    {
      id: 5,
      name: "David W.",
      service: "Headlight Restoration",
      title: "Huge improvement in appearance",
      text: "The headlights looked much clearer after service and made the front end of the car look newer overall. Quick, simple, and definitely worth it.",
    },
    {
      id: 6,
      name: "Jennifer A.",
      service: "Interior Detail",
      title: "The interior looked reset",
      text: "The inside of the car felt cleaner, fresher, and much more put together after the detail. It made a big difference in how the vehicle felt to drive.",
    },
  ];

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "Clear Service Options",
      text: "Customers can understand packages, pricing, and upgrades before booking.",
    },
    {
      icon: Sparkles,
      title: "Visible Results",
      text: "Strong before-and-after improvements help build confidence in the work.",
    },
    {
      icon: Clock3,
      title: "Convenient Booking",
      text: "Online quote and booking flow helps reduce back-and-forth and save time.",
    },
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        style={{
          color: "#facc15",
          fill: "#facc15",
        }}
      />
    ));
  };

  return (
    <section
      id="reviews"
      className="section"
      style={{
        background: "linear-gradient(180deg, #050505 0%, #000000 100%)",
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
          <div className="eyebrow justify-center">Customer Reviews</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why customers keep coming
            <span className="text-red-500"> back</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            A detailing business grows on trust, consistency, and visible results.
            This section helps show exactly that.
          </p>
        </motion.div>

        {/* Trust Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
            marginBottom: "28px",
          }}
          className="reviews-trust-grid"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              style={trustCardStyle}
            >
              <div style={trustIconWrapStyle}>
                <point.icon size={24} color="#ef4444" />
              </div>
              <h3 style={trustTitleStyle}>{point.title}</h3>
              <p style={trustTextStyle}>{point.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
          }}
          className="reviews-grid"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              style={reviewCardStyle}
            >
              <div style={quoteIconWrapStyle}>
                <Quote size={20} color="#ef4444" />
              </div>

              <div style={starsRowStyle}>{renderStars()}</div>

              <div style={serviceBadgeStyle}>{review.service}</div>

              <h3 style={reviewTitleStyle}>{review.title}</h3>

              <p style={reviewTextStyle}>{review.text}</p>

              <div style={reviewFooterStyle}>
                <span style={reviewNameStyle}>{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .reviews-trust-grid,
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

/* Styles */
const trustCardStyle = {
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "24px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "24px",
};

const trustIconWrapStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "16px",
  background: "rgba(239,68,68,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "14px",
};

const trustTitleStyle = {
  color: "#fff",
  fontSize: "1.12rem",
  fontWeight: "800",
  marginBottom: "8px",
};

const trustTextStyle = {
  color: "#cbd5e1",
  fontSize: "0.95rem",
  lineHeight: 1.7,
  margin: 0,
};

const reviewCardStyle = {
  position: "relative",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "26px",
  background: "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",
  padding: "26px",
  color: "#fff",
};

const quoteIconWrapStyle = {
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  background: "rgba(239,68,68,0.10)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "14px",
};

const starsRowStyle = {
  display: "flex",
  gap: "4px",
  marginBottom: "12px",
};

const serviceBadgeStyle = {
  display: "inline-block",
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(239,68,68,0.10)",
  border: "1px solid rgba(239,68,68,0.16)",
  color: "#fca5a5",
  fontWeight: "700",
  fontSize: "0.8rem",
  marginBottom: "14px",
};

const reviewTitleStyle = {
  color: "#fff",
  fontSize: "1.15rem",
  fontWeight: "800",
  lineHeight: 1.3,
  marginBottom: "10px",
};

const reviewTextStyle = {
  color: "#d1d5db",
  fontSize: "0.96rem",
  lineHeight: 1.75,
  marginBottom: "18px",
};

const reviewFooterStyle = {
  paddingTop: "14px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
};

const reviewNameStyle = {
  color: "#ffffff",
  fontWeight: "800",
  fontSize: "0.95rem",
};

export default Reviews;