import { useState, useEffect } from 'react';
import { Menu, X, Heart, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../hooks/useTheme';

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
  const { theme, toggleTheme } = useTheme();

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
      scrolled 
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2 border-gray-100 dark:border-gray-800" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-primary text-white p-2 rounded-full shadow-md group-hover:bg-primary-dark transition-colors">
            <Heart size={24} fill="white" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-bold text-xl leading-none tracking-tight transition-colors", 
              scrolled ? "text-primary dark:text-white" : "text-white drop-shadow-md"
            )}>
              JPCT
            </span>
            <span className={cn(
              "text-[10px] font-medium uppercase tracking-widest transition-colors", 
              scrolled ? "text-gray-500 dark:text-gray-400" : "text-gray-200 drop-shadow-md"
            )}>
              Teziutlán
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                scrolled 
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 dark:hover:bg-white/5" 
                  : "text-white hover:bg-white/20 drop-shadow-sm"
              )}
            >
              {link.name}
            </a>
          ))}
          
          {/* Botón Modo Oscuro (Icono Luna/Sol) */}
          <button
            onClick={toggleTheme}
            className={cn(
              "ml-4 p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95",
              scrolled 
                ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700" 
                : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
            )}
            aria-label="Alternar modo oscuro"
            title={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="xl:hidden flex items-center gap-4">
          {/* Botón Modo Oscuro Móvil */}
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-all duration-300 active:scale-95",
              scrolled 
                ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400" 
                : "bg-white/20 text-white backdrop-blur-sm"
            )}
            aria-label="Alternar modo oscuro"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className={scrolled ? "text-primary dark:text-white" : "text-white"} />
            ) : (
              <Menu size={28} className={scrolled ? "text-primary dark:text-white" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "xl:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col py-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-4 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary-light font-medium border-b border-gray-50 dark:border-gray-800 last:border-none flex items-center justify-between group"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="text-primary/0 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">→</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
