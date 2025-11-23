import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nuestra Historia', href: '#historia' },
  { name: 'Quiénes Somos', href: '#quienes-somos' },
  { name: 'Filosofía', href: '#filosofia' },
  { name: 'Organigrama', href: '#organigrama' },
  { name: 'Áreas de Atención', href: '#areas' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-white shadow-md py-2 border-gray-100" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-primary text-white p-2 rounded-full shadow-md group-hover:bg-primary-dark transition-colors">
            <Heart size={24} fill="white" />
          </div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-xl leading-none tracking-tight", scrolled ? "text-primary" : "text-white drop-shadow-md")}>
              JPCT
            </span>
            <span className={cn("text-[10px] font-medium uppercase tracking-widest", scrolled ? "text-gray-500" : "text-gray-200 drop-shadow-md")}>
              Teziutlán
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                scrolled 
                  ? "text-gray-700 hover:text-primary hover:bg-primary/5" 
                  : "text-white hover:bg-white/20 drop-shadow-sm"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className={scrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu size={28} className={scrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col py-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium border-b border-gray-50 last:border-none flex items-center justify-between group"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="text-primary/0 group-hover:text-primary transition-colors">→</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
