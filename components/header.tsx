
'use client';
import Link from 'next/link';
import { personalInfo } from '@/data/info';

const Header = () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-black/50 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-white">
        {personalInfo.name}
      </Link>
      <nav className="hidden md:flex gap-x-6 text-gray-300">
        <Link href="#about" className="hover:text-white transition">About</Link>
        <Link href="#experience" className="hover:text-white transition">Experience</Link>
        <Link href="#projects" className="hover:text-white transition">Projects</Link>
        <Link href="#publications" className="hover:text-white transition">Publications</Link>
        <Link href="#skills" className="hover:text-white transition">Skills</Link>
        <Link href="#contact" className="hover:text-white transition">Contact</Link>
      </nav>
    </header>
  );
};
export default Header;