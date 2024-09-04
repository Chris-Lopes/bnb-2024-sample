import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start from lower down the screen
      whileInView={{ opacity: 1, y: 0 }} // Move to the middle (original position)
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="mb-10"
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
