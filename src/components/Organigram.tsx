import { Section } from './Section';

export default function Organigram() {
  return (
    <Section id="organigrama" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-12">Organigrama Institucional</h2>
        
        <div className="bg-white dark:bg-gray-800 p-4 md:p-8 rounded-xl shadow-sm inline-block max-w-4xl w-full border border-gray-100 dark:border-gray-700">
          <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
             {/* Placeholder for the image requested */}
             <div className="text-center p-8">
                <p className="text-gray-500 dark:text-gray-300 font-medium">Espacio reservado para:</p>
                <code className="block mt-2 text-primary dark:text-primary-light bg-gray-100 dark:bg-gray-900 p-2 rounded">&lt;img src="organigrama.png" /&gt;</code>
                <p className="text-sm text-gray-400 mt-4">Dimensiones recomendadas: 1200x800px</p>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
