'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props { title: string; description: string; technologies: string[]; link: string; }

const ProjectCard = ({ title, description, technologies, link }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-gray-700/50 transition-shadow flex flex-col border border-gray-700"
    >
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
          ))}
        </div>
        <Link href={link} target="_blank" className="font-semibold text-gray-300 hover:text-white hover:underline">
          View on GitHub &rarr;
        </Link>
      </div>
    </motion.div>
  );
};
export default ProjectCard;