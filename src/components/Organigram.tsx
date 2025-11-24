import { Section } from './Section';

export default function Organigram() {
  return (
    <Section id="organigrama" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-12">Organigrama Institucional</h2>

        <div className="bg-white dark:bg-gray-800 p-4 md:p-8 rounded-xl shadow-sm inline-block max-w-4xl w-full border border-gray-100 dark:border-gray-700">
          <div className="relative rounded-lg overflow-hidden">
            {/* borde decorativo superior */}
            <div className="absolute top-0 left-0 right-0 h-1 md:h-2 pointer-events-none bg-gradient-to-r from-transparent via-primary to-transparent dark:via-primary-light" />

            <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
              <img src="/Organigrama.png" alt="Organigrama Institucional" className="object-contain w-full h-full" />
            </div>

            {/* borde decorativo inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-1 md:h-2 pointer-events-none bg-gradient-to-r from-transparent via-primary to-transparent dark:via-primary-light" />
          </div>
        </div>
      </div>
    </Section>
  );
}
