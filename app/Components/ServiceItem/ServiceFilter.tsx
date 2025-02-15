"use client";

import { ServiceCategory } from "../../utils/service";
import { motion } from "framer-motion";

interface ServiceFilterProps {
  categories: { id: ServiceCategory; label: string }[];
  activeCategory: ServiceCategory;
  onCategoryChange: (category: ServiceCategory) => void;
}

export default function ServiceFilter({
  activeCategory,
  categories,
  onCategoryChange,
}: ServiceFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {categories.map(({ id, label }) => (
        <motion.button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`
						px-6 py-2 rounded-full
						text-sm font-medium transition-all
						duration-300 ${
              activeCategory === id
                ? "bg-skin-base text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
            }
					`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
}
