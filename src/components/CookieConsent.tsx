import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("kapuda-cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1000);
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-kapuda-dark text-primary-foreground rounded-xl shadow-2xl border border-kapuda-orange/30 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Cookie className="w-8 h-8 text-kapuda-orange shrink-0" />
          <div className="flex-1 text-sm">
            <p className="font-heading font-semibold mb-1">🍪 Utilizamos Cookies</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Utilizamos cookies para melhorar a sua experiência no nosso site. Ao continuar a navegar, concorda com a nossa{" "}
              <Link to="/privacidade" className="text-kapuda-orange underline hover:text-kapuda-orange-light">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={decline}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-muted-foreground/30 text-muted-foreground text-xs font-semibold hover:border-muted-foreground/60 transition-colors"
            >
              Recusar
            </button>
            <button
              onClick={accept}
              className="btn-cta flex-1 sm:flex-none px-5 py-2 rounded-lg text-primary-foreground text-xs font-bold"
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
