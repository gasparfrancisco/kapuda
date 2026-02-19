import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("kapuda-cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("kapuda-cookies-accepted", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("kapuda-cookies-accepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
      style={{
        animation: "fade-in-up 0.4s ease forwards",
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <div
          className="rounded-xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: "hsl(220, 30%, 12%)",
            border: "1px solid hsl(27, 90%, 54%, 0.35)",
          }}
        >
          <Cookie className="w-8 h-8 shrink-0" style={{ color: "hsl(27, 90%, 54%)" }} />
          <div className="flex-1 text-sm">
            <p
              className="font-bold mb-1"
              style={{ fontFamily: "Montserrat, sans-serif", color: "hsl(0, 0%, 100%)" }}
            >
              🍪 Utilizamos Cookies
            </p>
            <p style={{ color: "hsl(215, 16%, 65%)", fontSize: "0.75rem", lineHeight: "1.5" }}>
              Utilizamos cookies para melhorar a sua experiência no nosso site. Ao continuar a
              navegar, concorda com a nossa{" "}
              <Link
                to="/privacidade"
                style={{ color: "hsl(27, 90%, 54%)", textDecoration: "underline" }}
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={decline}
              style={{
                flex: "1 1 0%",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                border: "1px solid hsl(215, 16%, 47%, 0.4)",
                color: "hsl(215, 16%, 65%)",
                fontSize: "0.75rem",
                fontWeight: 600,
                background: "transparent",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              Recusar
            </button>
            <button
              onClick={accept}
              style={{
                flex: "1 1 0%",
                padding: "0.5rem 1.25rem",
                borderRadius: "0.5rem",
                background: "linear-gradient(135deg, hsl(27, 90%, 54%) 0%, hsl(27, 90%, 42%) 100%)",
                boxShadow: "0 8px 32px -8px hsl(27, 90%, 54%, 0.5)",
                color: "white",
                fontSize: "0.75rem",
                fontWeight: 700,
                fontFamily: "Montserrat, sans-serif",
                cursor: "pointer",
                border: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              Aceitar Todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
