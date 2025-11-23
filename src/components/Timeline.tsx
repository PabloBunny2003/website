import { Section } from './Section';

    const milestones = [
      { year: '1905', title: 'Fundación', description: 'Se establece la Junta Particular de Caridad con el objetivo de ayudar a los más necesitados.' },
      { year: '1950', title: 'Primer Hospital', description: 'Inauguración de las primeras instalaciones médicas dedicadas a la comunidad.' },
      { year: '1985', title: 'Expansión', description: 'Ampliación de servicios incluyendo velatorios y asistencia social integral.' },
      { year: '2010', title: 'Modernización', description: 'Renovación de equipos médicos y reestructuración administrativa.' },
      { year: '2024', title: 'Actualidad', description: 'Continuamos sirviendo con la misma pasión y compromiso que el primer día.' },
    ];

    export default function Timeline() {
      return (
        <Section id="historia" className="bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra Historia</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>

              <div className="space-y-12">
                {milestones.map((item, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Content */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 mb-4 md:mb-0">
                      <div className={`bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-primary ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="text-primary font-bold text-xl block mb-1">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
                    
                    {/* Empty Space for Layout Balance */}
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      );
    }
