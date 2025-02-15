"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillItemProps {
  skill: string;
  icon: string;
  href: string;
  index: number;
}

export default function SkillItem({ href, icon, index, skill }: SkillItemProps) {
  return (
    <motion.a
      href={href}
      className="relative block w-12 h-12 md:w-16 md:h-16 group"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
    >
      <Image
        src={icon}
        alt={skill}
        width={64}
        height={64}
        className="w-full h-full object-contain"
      />
      <span className="absolute -top-10 left-1/2 bg-gray text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible dark:bg-gray-700 z-10">
        {skill}
      </span>
    </motion.a>
  );
}
