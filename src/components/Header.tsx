import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import kapudaLogo from "@/assets/kapuda-logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contactos", label: "Contactos" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-kapuda-blue shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={kapudaLogo}
            alt="Kapuda Vendas Online Logo"
            className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-kapuda-orange shadow-md"
          />
          <div className="hidden sm:block">
            <p className="text-primary-foreground font-heading font-bold text-lg leading-tight">KAPUDA</p>
            <p className="text-kapuda-orange font-heading font-semibold text-xs tracking-widest">VENDAS ONLINE</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading font-semibold text-sm tracking-wide transition-colors duration-200 ${
                isActive(link.to)
                  ? "text-kapuda-orange border-b-2 border-kapuda-orange pb-0.5"
                  : "text-primary-foreground hover:text-kapuda-orange"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://pay.kuenha.com/855c4e61-9eec-477d-a169-5368ee38ba27?p=75c6bbdd-e493-4bec-8190-efdab3fcd23f"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta flex items-center gap-2 px-5 py-2 rounded-full text-primary-foreground text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Comprar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-kapuda-dark border-t border-primary/20 px-4 pb-4 pt-2 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-heading font-semibold text-sm py-2 border-b border-primary/10 ${
                isActive(link.to) ? "text-kapuda-orange" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://pay.kuenha.com/855c4e61-9eec-477d-a169-5368ee38ba27?p=75c6bbdd-e493-4bec-8190-efdab3fcd23f"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-center py-3 rounded-full text-primary-foreground font-heading font-bold text-sm mt-2"
          >
            🛒 Comprar Agora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
