import { Section } from './Section';
    import { Users, HeartHandshake } from 'lucide-react';

    export default function About() {
      return (
        <Section id="quienes-somos" className="bg-gray-50">
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
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Quiénes Somos</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  La Junta Particular de Caridad de Teziutlán es un organismo social sin fines de lucro, dedicado a brindar asistencia médica, apoyo moral y servicios funerarios a los sectores más vulnerables de nuestra región.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Desde nuestra fundación, hemos trabajado incansablemente para ser un faro de esperanza, gestionando recursos con transparencia y aplicándolos donde más se necesitan.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Comunidad</h4>
                      <p className="text-sm text-gray-500">Enfoque en el bienestar social.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                      <HeartHandshake size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Compromiso</h4>
                      <p className="text-sm text-gray-500">Ayuda desinteresada y constante.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      );
    }
