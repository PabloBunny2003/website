import { useState } from 'react';
import { Section } from './Section';
import { cn } from '../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const milestones = [
  { year: '1905', title: 'Fundación', description: 'Se establece la Junta Particular de Caridad con el objetivo de ayudar a los más necesitados.' },
  { year: '1920', title: 'Primera Sede', description: 'Adquisición del inmueble histórico que alberga nuestras oficinas centrales en el centro de Teziutlán.' },
  { year: '1945', title: 'Consolidación', description: 'Se establecen los estatutos oficiales y se amplía la red de benefactores.' },
  { year: '1950', title: 'Primer Hospital', description: 'Inauguración de las primeras instalaciones médicas dedicadas a la comunidad.' },
  { year: '1965', title: 'Voluntariado', description: 'Se formaliza el grupo de damas voluntarias para apoyo en asistencia social.' },
  { year: '1985', title: 'Expansión', description: 'Ampliación de servicios incluyendo velatorios y asistencia social integral.' },
  { year: '1998', title: 'Reconocimiento', description: 'Premio estatal al mérito altruista por la labor ininterrumpida en la sierra nororiental.' },
  { year: '2005', title: 'Centenario', description: 'Celebración de 100 años de servicio ininterrumpido a la comunidad teziuteca.' },
  { year: '2010', title: 'Modernización', description: 'Renovación de equipos médicos y reestructuración administrativa del hospital.' },
  { year: '2018', title: 'Nuevas Áreas', description: 'Apertura de la unidad de rehabilitación física y terapia para pacientes de bajos recursos.' },
  { year: '2020', title: 'Resiliencia', description: 'Adaptación de protocolos y apoyo extraordinario durante la contingencia sanitaria.' },
  { year: '2024', title: 'Actualidad', description: 'Continuamos sirviendo con la misma pasión y compromiso que el primer día.' },
];

export default function Timeline() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4; // Número de hitos visibles en escritorio

  const nextSlide = () => {
    if (startIndex + itemsPerPage < milestones.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  const visibleMilestones = milestones.slice(startIndex, startIndex + itemsPerPage);
  const canPrev = startIndex > 0;
  const canNext = startIndex + itemsPerPage < milestones.length;

  return (
    <Section id="historia" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra Historia</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500">Un legado de servicio a través de las décadas.</p>
        </div>

        {/* Mobile View (Vertical) - Visible only on small screens */}
        <div className="md:hidden relative space-y-8 pl-8 border-l-2 border-primary/20 ml-4">
          {milestones.map((item, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md"></div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <span className="text-primary font-bold text-xl block mb-1">{item.year}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View (Horizontal Carousel) - Visible only on medium+ screens */}
        <div className="hidden md:flex items-center gap-4 relative py-10">
            
            {/* Botón Anterior */}
            <button 
                onClick={prevSlide}
                disabled={!canPrev}
                className={cn(
                    "p-3 rounded-full shadow-lg border transition-all z-20 flex-shrink-0",
                    canPrev 
                        ? "bg-white text-primary hover:bg-primary hover:text-white border-primary/20 hover:scale-110" 
                        : "bg-gray-50 text-gray-300 border-transparent cursor-not-allowed opacity-50"
                )}
                aria-label="Ver hitos anteriores"
            >
                <ChevronLeft size={32} />
            </button>

            {/* Contenedor del Timeline */}
            <div className="flex-grow relative min-h-[480px] overflow-hidden">
                {/* Línea Central de Fondo */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 z-0 rounded-full"></div>
                
                <div className="grid grid-cols-4 gap-0 h-full w-full">
                    <AnimatePresence mode='popLayout'>
                        {visibleMilestones.map((item, index) => {
                            // Usamos el índice absoluto para determinar si va arriba o abajo
                            // Esto asegura que el patrón se mantenga consistente al navegar
                            const absoluteIndex = startIndex + index;
                            const isEven = absoluteIndex % 2 === 0;
                            
                            return (
                                <motion.div 
                                    key={item.year}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="grid grid-rows-[1fr_auto_1fr] h-full group px-2"
                                >
                                    
                                    {/* Sección Superior (Contenido para pares) */}
                                    <div className="flex flex-col justify-end pb-8 relative">
                                        {isEven && (
                                            <div className="bg-gray-50 p-5 rounded-xl shadow-sm border-b-4 border-primary text-center hover:-translate-y-2 transition-all duration-300 relative z-10 h-auto flex flex-col justify-center hover:shadow-md hover:bg-white group-hover:border-primary-light">
                                                <span className="text-primary font-bold text-2xl block mb-2">{item.year}</span>
                                                <h3 className="font-bold text-gray-900 mb-2 leading-tight text-lg">{item.title}</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{item.description}</p>
                                                
                                                {/* Línea conectora */}
                                                <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-primary/30 -translate-x-1/2"></div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Marcador Central (Eje) */}
                                    <div className="relative flex items-center justify-center h-8 z-10">
                                        <div className={cn(
                                            "w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md transition-all duration-300 group-hover:scale-150 group-hover:bg-primary-dark",
                                            "ring-4 ring-primary/10"
                                        )}></div>
                                    </div>

                                    {/* Sección Inferior (Contenido para impares) */}
                                    <div className="flex flex-col justify-start pt-8 relative">
                                        {!isEven && (
                                            <div className="bg-gray-50 p-5 rounded-xl shadow-sm border-t-4 border-primary text-center hover:translate-y-2 transition-all duration-300 relative z-10 h-auto flex flex-col justify-center hover:shadow-md hover:bg-white group-hover:border-primary-light">
                                                {/* Línea conectora */}
                                                <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-primary/30 -translate-x-1/2"></div>

                                                <span className="text-primary font-bold text-2xl block mb-2">{item.year}</span>
                                                <h3 className="font-bold text-gray-900 mb-2 leading-tight text-lg">{item.title}</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{item.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Botón Siguiente */}
            <button 
                onClick={nextSlide}
                disabled={!canNext}
                className={cn(
                    "p-3 rounded-full shadow-lg border transition-all z-20 flex-shrink-0",
                    canNext 
                        ? "bg-white text-primary hover:bg-primary hover:text-white border-primary/20 hover:scale-110" 
                        : "bg-gray-50 text-gray-300 border-transparent cursor-not-allowed opacity-50"
                )}
                aria-label="Ver hitos siguientes"
            >
                <ChevronRight size={32} />
            </button>

        </div>
        
        {/* Indicador de progreso (opcional) */}
        <div className="hidden md:flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(milestones.length - itemsPerPage + 1) }).map((_, idx) => (
                <div 
                    key={idx} 
                    className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        idx === startIndex ? "w-8 bg-primary" : "w-2 bg-gray-200"
                    )}
                />
            ))}
        </div>
      </div>
    </Section>
  );
}
