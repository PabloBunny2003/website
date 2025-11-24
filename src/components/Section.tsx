import { motion } from 'framer-motion';
    import { ReactNode } from 'react';
    import { cn } from '../lib/utils';

    interface SectionProps {
      children: ReactNode;
      id?: string;
      className?: string;
      delay?: number;
    }

    export const Section = ({ children, id, className, delay = 0 }: SectionProps) => {
      return (
        // Reduje el padding vertical por defecto para evitar grandes espacios en blanco entre secciones
        <section id={id} className={cn("py-12 md:py-16", className)}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </section>
      );
    };
