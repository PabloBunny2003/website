import { Section } from './Section';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contacto" className="bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 dark:bg-gray-900 -skew-x-12 translate-x-20 -z-0 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">Contáctanos</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Estamos a tu disposición para resolver dudas, recibir donaciones o brindar información sobre nuestros servicios.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Envíanos un mensaje</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Nombre</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 dark:bg-gray-800 dark:text-white focus:bg-white dark:focus:bg-gray-900" placeholder="Tu nombre completo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Correo</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 dark:bg-gray-800 dark:text-white focus:bg-white dark:focus:bg-gray-900" placeholder="tucorreo@ejemplo.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Asunto</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 dark:bg-gray-800 dark:text-white focus:bg-white dark:focus:bg-gray-900" placeholder="Motivo de tu mensaje" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Mensaje</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 dark:bg-gray-800 dark:text-white focus:bg-white dark:focus:bg-gray-900 resize-none" placeholder="Escribe tu mensaje aquí..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg">
                  Enviar Mensaje <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Info & Map */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 transition-colors group">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-sm text-primary dark:text-primary-light group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary-light dark:group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Ubicación</h4>
                  <p className="text-gray-600 dark:text-gray-400">Calle Hidalgo No. 300, Colonia Centro,<br />Teziutlán, Puebla. CP 73800</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 transition-colors group">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-sm text-primary dark:text-primary-light group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary-light dark:group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Teléfono</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">(231) 312 0000</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Lunes a Viernes, 9am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 transition-colors group">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-sm text-primary dark:text-primary-light group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary-light dark:group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Correo Electrónico</h4>
                  <a href="mailto:contacto@jpct.org.mx" className="text-primary dark:text-primary-light font-medium hover:underline">contacto@jpct.org.mx</a>
                </div>
              </div>
            </div>

            <div className="flex-grow min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.164671736646!2d-97.36166668508977!3d19.81516668666815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85da97b1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sTeziutl%C3%A1n%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1620000000000!5m2!1ses-419!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Mapa de Ubicación JPCT"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
