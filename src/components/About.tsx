import { Section } from './Section';
import { Users, Handshake } from 'lucide-react';

export default function About() {
  return (
    <Section id="quienes-somos" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2940&auto=format&fit=crop" 
              alt="Equipo JPCT" 
              className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-6">Quiénes Somos</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              La Junta Particular de Caridad de Teziutlán (JPCT) es una organización sin fines de lucro que brinda servicios médicos y sociales a la comunidad teziuteca. A través de la administración del Hospital Guadalupano, ofrece atención accesible y de calidad con un enfoque humano.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Nuestros valores —solidaridad, compromiso, honestidad y respeto— guían todas nuestras acciones. La JPCT mantiene su vocación de ayuda y servicio para mejorar la calidad de vida de las personas de la región.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm text-primary dark:text-primary-light border dark:border-gray-700">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Comunidad</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Enfoque en el bienestar social.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm text-primary dark:text-primary-light border dark:border-gray-700">
                  <Handshake size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Compromiso</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ayuda desinteresada y constante.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
