import React from 'react';
import { motion } from 'framer-motion';

const CallButton = ({ className = '', size = 'default' }) => {
  const phoneNumber = '(530) 321-2936';
  const telLink = `tel:5303212936`;

  const handleCallClick = () => {
    // Track call event (for analytics)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'call_click', {
        phone_number: phoneNumber,
        location: window.location.pathname
      });
    }
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <motion.a
      href={telLink}
      onClick={handleCallClick}
      className={`btn-primary ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      Call Now
    </motion.a>
  );
};

export default CallButton;
