import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PopFadeInSectionProps {
  children: ReactNode;
}

const PopFadeInSection: React.FC<PopFadeInSectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Start small and invisible
      whileInView={{ opacity: 1, scale: 1 }} // Pop and fade in when in view
      transition={{ duration: 0.6, ease: 'easeOut' }} // Smooth pop effect
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
      className="mb-10"
    >
      {children}
    </motion.div>
  );
};

export default PopFadeInSection;
