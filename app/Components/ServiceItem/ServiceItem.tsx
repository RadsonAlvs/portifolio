"use client";

import { Service } from "@/utils/service";
import { useState } from "react";
import { motion } from "framer-motion";

interface ServiceItemProps extends Service {
  onViewDetails: (service: Service) => void;
}

export default function ServiceItem({
  category,
  description,
  icon,
  onViewDetails,
  title,
  details,
}: ServiceItemProps) {
  const [views, setViews] = useState(0);

  const handleViewDetails = () => {
    setViews((prev) => prev + 1);
    onViewDetails({ title, description, icon, details, category });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div
        className="
				flex
				flex-col
				items-center
				justify-center
				bg-gray-100 dark:bg-gray-800
				border
				border-gray-200 dark:border-gray-700
				rounded-xl
				p-8
				text-center
				transition-all
				duration-300
				h-full
				relative
				overflow-hidden
				hover:shadow-lg
				group
				before:content-['']
				before:absolute
				before:w-full
				before:h-[2px]
				before:bg-skin-base
				before:top-0
				before:animate-outlineAnimation
				before:rounded-lg"
      >
        {icon && (
          <div className="h-[60px] w-[60px] items-center justify-center flex rounded-full mb-8 text-center transition-all duration-300 group-hover:bg-skin-base">
            <i
              className={`fa fa-${icon} text-4xl leading-[60px] text-skin-base transition-all duration-300 group-hover:text-white group-hover:text-2xl`}
            ></i>
          </div>
        )}
        <h4 className="text-lg mb-4 text-gray-900 dark:text-white font-bold">{title}</h4>

        {description && (
          <p className="text-base text-gray-600 dark:text-gray-400 leading-6">{description}</p>
        )}

        <div className="mt-4 space-y-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">{views} Visualizações</span>

          <motion.button
            onClick={handleViewDetails}
            className="block w-full px-4 py-2 bg-skin-base text-white rounded-full transition-colors duration-300 hover:bg-skin-base/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Saiba mais
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
