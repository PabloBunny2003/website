import { ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';

    export default function Hero() {
      return (
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2832&auto=format&fit=crop" 
              alt="JPCT Background" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Vino Semitransparente */}
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Junta Particular de <br /> Caridad de Teziutlán
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto font-light text-gray-100"
            >
              Comprometidos con la salud, la caridad y el bienestar de nuestra comunidad.
            </motion.p>
            
            <motion.a 
              href="#quienes-somos"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              Conocer más <ArrowRight size={20} />
            </motion.a>
          </div>
        </section>
      );
    }
