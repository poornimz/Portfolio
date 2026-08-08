'use client';
import { motion } from 'framer-motion';

interface Props { role: string; company: string; date: string; description: string; }

const ExperienceCard = ({ role, company, date, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-10 pl-6 border-l-4 border-gray-500"
    >
      <h3 className="text-2xl font-bold text-white">{role}</h3>
      <p className="text-xl font-semibold text-gray-400 mt-1">{company}</p>
      <p className="text-md font-medium text-gray-500 my-2">{date}</p>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};
export default ExperienceCard;


