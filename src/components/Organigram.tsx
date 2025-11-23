import { Section } from './Section';

    export default function Organigram() {
      return (
        <Section id="organigrama" className="bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Organigrama Institucional</h2>
            
            <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm inline-block max-w-4xl w-full">
              <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                 {/* Placeholder for the image requested */}
                 <div className="text-center p-8">
                    <p className="text-gray-500 font-medium">Espacio reservado para:</p>
                    <code className="block mt-2 text-primary bg-gray-100 p-2 rounded">&lt;img src="organigrama.png" /&gt;</code>
                    <p className="text-sm text-gray-400 mt-4">Dimensiones recomendadas: 1200x800px</p>
                 </div>
              </div>
            </div>
          </div>
        </Section>
      );
    }
