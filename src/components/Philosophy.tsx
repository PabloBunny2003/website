import { Section } from './Section';
    import { HandHeart, ShieldCheck, Heart, Scale, Users, Award } from 'lucide-react';

    const values = [
      { icon: HandHeart, title: 'Vocación de Servicio', desc: 'Entrega total a las necesidades del prójimo.' },
      { icon: ShieldCheck, title: 'Responsabilidad', desc: 'Compromiso ético en cada una de nuestras acciones.' },
      { icon: Heart, title: 'Misericordia', desc: 'Compasión profunda por el sufrimiento ajeno.' },
      { icon: Award, title: 'Integridad', desc: 'Honestidad y transparencia en nuestra gestión.' },
      { icon: Users, title: 'Empatía', desc: 'Entendemos y compartimos los sentimientos de los demás.' },
      { icon: Scale, title: 'Equidad', desc: 'Trato justo e igualitario para todos los beneficiarios.' },
    ];

    export default function Philosophy() {
      return (
        <Section id="filosofia" className="bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra Filosofía</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Los pilares que sostienen nuestra labor diaria y guían nuestro camino hacia la excelencia en el servicio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 group">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <val.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      );
    }
