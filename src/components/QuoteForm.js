import React from "react";

export default function QuoteForm() {
  return (
    <section
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#0d0d0d",
          border: "1px solid #1f1f1f",
          borderRadius: "22px",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#ff3b3b",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: "800",
            fontSize: "0.95rem",
            marginBottom: "10px",
          }}
        >
          Request Quote
        </p>

        <h2
          style={{
            fontSize: "2.1rem",
            lineHeight: 1.15,
            margin: "0 0 12px 0",
            fontWeight: "800",
          }}
        >
          Start your booking online
        </h2>

        <p
          style={{
            color: "#d5d5d5",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            maxWidth: "680px",
            margin: "0 auto 24px",
          }}
        >
          To keep the experience simple, all quotes and bookings now go through the
          booking form below.
        </p>

        <a
          href="#booking"
          style={{
            display: "inline-block",
            backgroundColor: "#ff1d1d",
            color: "#fff",
            textDecoration: "none",
            padding: "16px 24px",
            borderRadius: "999px",
            fontWeight: "800",
            fontSize: "1.05rem",
          }}
        >
          Go to Booking Form
        </a>
      </div>
    </section>
  );
}