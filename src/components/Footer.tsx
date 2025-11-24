import { Heart, MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Logo / Nombre */}
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-full">
                <Heart size={20} fill="white" />
              </div>
              <span className="font-bold text-xl">JPCT</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">Organización sin fines de lucro dedicada a brindar servicios médicos y sociales a la comunidad teziuteca mediante el Hospital Guadalupano y programas de apoyo.</p>
          </div>

          {/* Enlaces rápidos y Donar */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="font-semibold text-white mb-3">Enlaces</h4>

            {/* Enlaces apilados, estilo libro */}
            <nav className="flex flex-col gap-2 text-gray-300 text-sm mb-4 md:border-l-2 md:border-primary/20 md:pl-3">
              <a href="#quienes-somos" className="block hover:text-white">Quiénes somos</a>
              <a href="#historia" className="block hover:text-white">Nuestra Historia</a>
              <a href="#filosofia" className="block hover:text-white">Filosofía</a>
              <a href="#contacto" className="block hover:text-white">Contacto</a>
            </nav>

            {/* Botón Donar apunta al formulario de contacto */}
            <a href="#contacto" className="mt-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">Donar</a>
          </div>

          {/* Contacto y redes */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-white mb-3">Contacto</h4>
            <div className="text-gray-400 text-sm mb-3">
              <div className="flex items-start gap-3">
                <div className="pt-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div>Av. Benito Juárez 301, Centro, Teziutlán, Pue. CP 73800</div>
                </div>
              </div>

              <div className="mt-3 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="pt-1"><Phone size={16} /></div>
                  <div className="flex flex-col">
                    <a href="tel:+522313120106" className="hover:underline">231 312 0106</a>
                    <a href="tel:+522313121508" className="hover:underline">231 312 1508</a>
                    <a href="tel:+522313124504" className="hover:underline">231 312 4504</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="pt-1"><Mail size={16} /></div>
                  <div className="flex flex-col">
                    <a href="mailto:jpcteziutlan@gmail.com" className="hover:underline text-gray-300">jpcteziutlan@gmail.com</a>
                    <a href="mailto:hospguadalupano@prodigy.net.mx" className="hover:underline text-gray-300">hospguadalupano@prodigy.net.mx</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-400">
                  <div className="pt-1"><Clock size={16} /></div>
                  <div>
                    <div><span className="font-medium">Administración:</span> Lun–Vie 9:00–18:00</div>
                    <div className="mt-1"><span className="font-medium">Urgencias:</span> 24 hrs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4">
          <div>&copy; {year} Junta Particular de Caridad de Teziutlán. Todos los derechos reservados.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
