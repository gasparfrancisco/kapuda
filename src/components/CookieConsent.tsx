import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Shield } from "lucide-react";

const COOKIE_KEY = "kapuda-cookies-v2";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Migrar da chave antiga para a nova — garante que todos vejam o banner
    const oldKey = localStorage.getItem("kapuda-cookies-accepted");
    if (oldKey !== null) {
      // Remove chave antiga e força nova aceitação
      localStorage.removeItem("kapuda-cookies-accepted");
    }

    const timer = setTimeout(() => {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) {
        setVisible(true);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        padding: "1rem",
        animation: "slideUpCookie 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <style>{`
        @keyframes slideUpCookie {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "1rem",
          boxShadow: "0 -4px 40px rgba(0,0,0,0.35)",
          background: "hsl(220, 30%, 10%)",
          border: "1px solid rgba(234, 130, 30, 0.4)",
          padding: "1.25rem 1.5rem",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
          <Shield style={{ width: "20px", height: "20px", color: "hsl(27, 90%, 54%)", flexShrink: 0 }} />
          <span style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "0.95rem",
            color: "white",
          }}>
            🍪 Política de Privacidade & Cookies
          </span>
        </div>

        {/* Body */}
        <p style={{
          color: "hsl(215, 16%, 72%)",
          fontSize: "0.78rem",
          lineHeight: "1.6",
          marginBottom: "1rem",
        }}>
          Ao entrar neste site, está a concordar com a utilização de cookies para melhorar a sua experiência.
          Os seus dados são tratados com segurança e nunca partilhados com terceiros sem o seu consentimento.
          Consulte a nossa{" "}
          <Link
            to="/privacidade"
            style={{ color: "hsl(27, 90%, 60%)", textDecoration: "underline", fontWeight: 600 }}
          >
            Política de Privacidade
          </Link>{" "}
          para mais detalhes.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button
            onClick={decline}
            style={{
              padding: "0.55rem 1.25rem",
              borderRadius: "0.5rem",
              border: "1px solid rgba(150, 160, 180, 0.35)",
              color: "hsl(215, 16%, 65%)",
              fontSize: "0.78rem",
              fontWeight: 600,
              background: "transparent",
              cursor: "pointer",
              fontFamily: "Montserrat, sans-serif",
              transition: "border-color 0.2s",
            }}
          >
            Recusar
          </button>
          <button
            onClick={accept}
            style={{
              padding: "0.55rem 1.5rem",
              borderRadius: "0.5rem",
              background: "linear-gradient(135deg, hsl(27, 90%, 54%) 0%, hsl(27, 90%, 40%) 100%)",
              boxShadow: "0 4px 20px rgba(234, 130, 30, 0.45)",
              color: "white",
              fontSize: "0.78rem",
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
              cursor: "pointer",
              border: "none",
            }}
          >
            ✓ Aceitar & Continuar
          </button>
          <Link
            to="/privacidade"
            onClick={accept}
            style={{
              padding: "0.55rem 1.25rem",
              borderRadius: "0.5rem",
              border: "1px solid rgba(234, 130, 30, 0.3)",
              color: "hsl(27, 90%, 60%)",
              fontSize: "0.78rem",
              fontWeight: 600,
              fontFamily: "Montserrat, sans-serif",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <Cookie style={{ width: "13px", height: "13px" }} />
            Ver Política
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
