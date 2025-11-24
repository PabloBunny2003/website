import { useState } from 'react';
import { Section } from './Section';
import { cn } from '../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const milestones = [
  { year: '1886', title: 'Inicio Solidario', description: 'Constitución de la Junta Particular de Caridad de Teziutlán (JPCT) con el propósito de brindar ayuda social y médica a los más necesitados.' },
  { year: '1888', title: 'Apoyo Público', description: 'Se organiza la primera colecta en Teziutlán para reunir fondos destinados al sostenimiento de la Junta.' },
  { year: '1890', title: 'Apertura Médica', description: 'Se establece oficialmente el Hospital Guadalupano, marcando el inicio formal de los servicios de salud para la comunidad.' },
  { year: '1893', title: 'Base Fija', description: 'La JPCT adquiere el terreno donde actualmente se ubica el hospital, consolidando su presencia física en la región.' },
  { year: '1900', title: 'Reconocimiento Legal', description: 'La JPCT obtiene personalidad jurídica y se reconoce oficialmente como institución de asistencia privada.' },
  { year: '1914–1917', title: 'Servicio Humanitario', description: 'Durante la Revolución Mexicana, el hospital atiende a heridos civiles y combatientes en medio de escasez y crisis.' },
  { year: '1923', title: 'Infraestructura Nueva', description: 'Comienzan las primeras mejoras en equipamiento médico y en las instalaciones del hospital.' },
  { year: '1935', title: 'Apoyo Vocacional', description: 'Se establecen colaboraciones con congregaciones religiosas dedicadas al cuidado de enfermos y asistencia médica.' },
  { year: '1950', title: 'Nuevos Servicios', description: 'Se modernizan los servicios médicos y se amplían las áreas de atención general para mayor capacidad hospitalaria.' },
  { year: '1967–1974', title: 'Obra Jenkins', description: 'Se lleva a cabo una reconstrucción importante del hospital con el auspicio de Fundación Jenkins.' },
  { year: '1975', title: 'Hospital Renovado', description: 'Se reinaugura el hospital con nuevas áreas quirúrgicas, laboratorios y mejoras estructurales.' },
  { year: '1975–1984', title: 'Impulso Tepeyac', description: 'La Fundación Tepeyac apoya la ampliación y modernización del hospital durante casi una década.' },
  { year: '1985–1996', title: 'Apoyo Teziutlán', description: 'Periodo de fortalecimiento institucional con el auspicio de Fundación Teziutlán, asegurando operación y mantenimiento.' },
  { year: '1997–2008', title: 'Vínculo UPAEP', description: 'Se establece una colaboración estratégica con la UPAEP, fortaleciendo prácticas clínicas y capacitación profesional.' },
  { year: '2000', title: 'Apoyo Nacional', description: 'Nacional Monte de Piedad y otras instituciones brindan apoyo económico para mejorar servicios y equipamiento.' },
  { year: '2010', title: 'Salud Comunitaria', description: 'Se implementan campañas médicas gratuitas en Teziutlán y municipios cercanos para ampliar el alcance social.' },
  { year: '2015', title: 'Registros Digitales', description: 'Se digitaliza parcialmente la información médica y administrativa, mejorando el control de datos.' },
  { year: '2020', title: 'Área Aislada', description: 'El hospital adapta protocolos sanitarios, habilita zonas de aislamiento y refuerza atención respiratoria durante la pandemia de COVID-19.' },
  { year: '2023', title: 'Legado Vivo', description: 'La JPCT celebra más de 137 años de labor médica y social continua en la región.' },
  { year: '2025', title: 'Transformación Total', description: 'Se implementa un nuevo sitio web, migración de datos a SQL Server y dashboards Power BI para mejorar toma de decisiones, comunicación y gestión hospitalaria.' },
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
    <Section id="historia" className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">Nuestra Historia</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Un legado de servicio a través de las décadas.</p>
        </div>

        {/* Mobile View (Vertical) */}
        <div className="md:hidden relative space-y-8 pl-8 border-l-2 border-primary/20 dark:border-primary/40 ml-4">
          {milestones.map((item, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm border-l-4 border-primary dark:border-primary-light transition-colors">
                <span className="text-primary dark:text-primary-light font-bold text-xl block mb-1">{item.year}</span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View (Horizontal Carousel) */}
        <div className="hidden md:flex items-center gap-4 relative py-10">
            
            {/* Botón Anterior */}
            <button 
                onClick={prevSlide}
                disabled={!canPrev}
                className={cn(
                    "p-3 rounded-full shadow-lg border transition-all z-20 flex-shrink-0",
                    canPrev 
                        ? "bg-white dark:bg-gray-800 text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white border-primary/20 dark:border-gray-700 hover:scale-110" 
                        : "bg-gray-50 dark:bg-gray-900 text-gray-300 dark:text-gray-700 border-transparent cursor-not-allowed opacity-50"
                )}
                aria-label="Ver hitos anteriores"
            >
                <ChevronLeft size={32} />
            </button>

            {/* Contenedor del Timeline */}
            <div className="flex-grow relative min-h-[480px] overflow-hidden">
                {/* Línea Central de Fondo */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 dark:bg-gray-800 -translate-y-1/2 z-0 rounded-full"></div>
                
                <div className="grid grid-cols-4 gap-0 h-full w-full">
                    <AnimatePresence mode='popLayout'>
                        {visibleMilestones.map((item, index) => {
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
                                            <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl shadow-sm border-b-4 border-primary dark:border-primary-light text-center hover:-translate-y-2 transition-all duration-300 relative z-10 h-auto flex flex-col justify-center hover:shadow-md hover:bg-white dark:hover:bg-gray-800 group-hover:border-primary-light">
                                                <span className="text-primary dark:text-primary-light font-bold text-2xl block mb-2">{item.year}</span>
                                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-tight text-lg">{item.title}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">{item.description}</p>
                                                
                                                {/* Línea conectora */}
                                                <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-primary/30 dark:bg-primary/50 -translate-x-1/2"></div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Marcador Central (Eje) */}
                                    <div className="relative flex items-center justify-center h-8 z-10">
                                        <div className={cn(
                                            "w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-gray-950 shadow-md transition-all duration-300 group-hover:scale-150 group-hover:bg-primary-dark",
                                            "ring-4 ring-primary/10 dark:ring-primary/20"
                                        )}></div>
                                    </div>

                                    {/* Sección Inferior (Contenido para impares) */}
                                    <div className="flex flex-col justify-start pt-8 relative">
                                        {!isEven && (
                                            <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl shadow-sm border-t-4 border-primary dark:border-primary-light text-center hover:translate-y-2 transition-all duration-300 relative z-10 h-auto flex flex-col justify-center hover:shadow-md hover:bg-white dark:hover:bg-gray-800 group-hover:border-primary-light">
                                                {/* Línea conectora */}
                                                <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-primary/30 dark:bg-primary/50 -translate-x-1/2"></div>

                                                <span className="text-primary dark:text-primary-light font-bold text-2xl block mb-2">{item.year}</span>
                                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-tight text-lg">{item.title}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">{item.description}</p>
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
                        ? "bg-white dark:bg-gray-800 text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white border-primary/20 dark:border-gray-700 hover:scale-110" 
                        : "bg-gray-50 dark:bg-gray-900 text-gray-300 dark:text-gray-700 border-transparent cursor-not-allowed opacity-50"
                )}
                aria-label="Ver hitos siguientes"
            >
                <ChevronRight size={32} />
            </button>

        </div>
        
        {/* Indicador de progreso */}
        <div className="hidden md:flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(milestones.length - itemsPerPage + 1) }).map((_, idx) => (
                <div 
                    key={idx} 
                    className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        idx === startIndex ? "w-8 bg-primary" : "w-2 bg-gray-200 dark:bg-gray-700"
                    )}
                />
            ))}
        </div>
      </div>
    </Section>
  );
}
