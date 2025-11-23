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
        <section id={id} className={cn("py-16 md:py-24", className)}>
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
