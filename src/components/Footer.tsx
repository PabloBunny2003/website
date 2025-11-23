import { Heart } from 'lucide-react';

    export default function Footer() {
      return (
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="bg-primary p-2 rounded-full">
                  <Heart size={20} fill="white" />
                </div>
                <span className="font-bold text-xl">JPCT</span>
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Junta Particular de Caridad de Teziutlán. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      );
    }
