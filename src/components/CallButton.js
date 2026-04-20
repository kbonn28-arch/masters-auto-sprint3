import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const CallButton = ({ className = "", size = "default", fullWidth = false }) => {
  const phoneNumberDisplay = "(530) 321-2936";
  const telLink = "tel:5303212936";

  const handleCallClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", "call_click", {
        phone_number: phoneNumberDisplay,
        location: window.location.pathname,
      });
    }
  };

  const sizeStyles = {
    small: {
      padding: "10px 16px",
      fontSize: "0.88rem",
    },
    default: {
      padding: "14px 20px",
      fontSize: "0.98rem",
    },
    large: {
      padding: "16px 22px",
      fontSize: "1rem",
    },
  };

  const activeSize = sizeStyles[size] || sizeStyles.default;

  return (
    <motion.a
      href={telLink}
      onClick={handleCallClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        width: fullWidth ? "100%" : "auto",
        textDecoration: "none",
        borderRadius: "999px",
        background: "linear-gradient(135deg, #ff2a2a 0%, #c40000 100%)",
        color: "#fff",
        fontWeight: "800",
        border: "none",
        boxShadow: "0 16px 34px rgba(255, 0, 0, 0.22)",
        whiteSpace: "nowrap",
        ...activeSize,
      }}
      aria-label={`Call ${phoneNumberDisplay}`}
    >
      <PhoneCall size={18} />
      Call {phoneNumberDisplay}
    </motion.a>
  );
};

export default CallButton;