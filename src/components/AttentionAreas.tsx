import { useState } from 'react';
import { Section } from './Section';
import { Stethoscope, HandCoins, Church, Clock, Users, Activity, Heart, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const areas = [
  {
    id: 'hospital',
    title: 'Hospital Guadalupano',
    icon: Stethoscope,
    description: 'Centro médico de alta calidad enfocado en brindar atención accesible y humana. Contamos con instalaciones modernas y personal calificado para atender las necesidades de salud de nuestra comunidad.',
    services: [
      'Consulta General y Especializada', 
      'Urgencias Médicas 24 horas', 
      'Laboratorio de Análisis Clínicos', 
      'Rayos X e Imagenología Digital', 
      'Hospitalización y Cirugía'
    ],
    target: 'Población general de Teziutlán y la región, con cuotas de recuperación accesibles y programas de apoyo social para casos vulnerables.',
    schedule: 'Abierto las 24 horas, los 365 días del año.',
    impact: 'Garantizamos el derecho a la salud digna, atendiendo a más de 10,000 pacientes anualmente, sin distinción de recursos.'
  },
  {
    id: 'beneficencia',
    title: 'Comisión de Beneficencia',
    icon: HandCoins,
    description: 'El corazón operativo de nuestra misión caritativa. Gestionamos recursos, donaciones y voluntariado para apoyar directamente a quienes menos tienen y más lo necesitan.',
    services: [
      'Apoyo directo con medicamentos', 
      'Entrega de despensas básicas', 
      'Gestión de aparatos ortopédicos', 
      'Trabajo social y estudios socioeconómicos', 
      'Visitas domiciliarias a enfermos'
    ],
    target: 'Personas en situación de pobreza extrema, adultos mayores en abandono, madres solteras y familias en crisis.',
    schedule: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
    impact: 'Reducimos la brecha de desigualdad proporcionando recursos vitales a las familias más necesitadas, devolviendo la esperanza.'
  },
  {
    id: 'velatorios',
    title: 'Velatorios',
    icon: Church,
    description: 'Servicios funerarios dignos, respetuosos y accesibles, brindando apoyo integral, moral y administrativo a las familias en sus momentos más difíciles.',
    services: [
      'Salas de velación confortables', 
      'Servicio de cafetería y acompañamiento', 
      'Gestión de trámites legales', 
      'Traslados locales y foráneos', 
      'Asesoría tanatológica básica'
    ],
    target: 'Comunidad en general, ofreciendo planes especiales y subsidios para familias de escasos recursos.',
    schedule: 'Atención y servicio las 24 horas.',
    impact: 'Ofrecemos un espacio de paz y dignidad para despedir a los seres queridos, aliviando la carga económica y logística del duelo.'
  }
];

export default function AttentionAreas() {
  const [activeTab, setActiveTab] = useState(areas[0].id);

  return (
    <Section id="areas" className="bg-white dark:bg-gray-950 py-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary dark:text-primary-light font-bold tracking-wider uppercase text-sm mb-2 block">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Áreas de Atención</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={cn(
                "flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2",
                activeTab === area.id
                  ? "bg-primary text-white border-primary shadow-xl scale-105 ring-4 ring-primary/20"
                  : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800"
              )}
            >
              <area.icon size={22} />
              {area.title}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {areas.map((area) => (
              activeTab === area.id && (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Info */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md text-primary dark:text-primary-light border border-gray-100 dark:border-gray-700">
                          <area.icon size={40} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{area.title}</h3>
                          <p className="text-primary dark:text-primary-light font-medium">Servicio Institucional</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed border-l-4 border-primary/20 dark:border-primary/40 pl-4">
                        {area.description}
                      </p>

                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 text-xl">
                          <Activity className="text-primary dark:text-primary-light" size={24} /> 
                          Servicios Principales
                        </h4>
                        <ul className="space-y-4">
                          {area.services.map((service, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group">
                              <CheckCircle2 className="text-primary dark:text-primary-light mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                              <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-lg">
                          <Users className="text-primary dark:text-primary-light" size={22} /> 
                          A quién atiende
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{area.target}</p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-lg">
                          <Clock className="text-primary dark:text-primary-light" size={22} /> 
                          Horarios de Atención
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">{area.schedule}</p>
                      </div>

                      <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-10">
                          <Heart size={150} fill="white" />
                        </div>
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-xl relative z-10">
                          <Heart size={22} fill="white" /> 
                          Impacto Social
                        </h4>
                        <p className="text-white/90 text-lg italic leading-relaxed relative z-10">
                          "{area.impact}"
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
