
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props { title: string; conference: string; authors: string; link: string; }

const PublicationCard = ({ title, conference, authors, link }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-gray-700/50 transition-shadow border border-gray-700"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 font-semibold text-md mb-3">{conference}</p>
        <p className="text-gray-500 text-sm mb-4">Authors: {authors}</p>
        <Link href={link} target="_blank" className="font-semibold text-gray-300 hover:text-white hover:underline">
          View on IEEE Xplore &rarr;
        </Link>
      </div>
    </motion.div>
  );
};
export default PublicationCard;