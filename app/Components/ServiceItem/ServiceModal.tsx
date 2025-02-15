"use client";

import { Service } from "@/utils/service";
import { AnimatePresence, motion } from "framer-motion";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full relative shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          <div className="text-center mb-6">
            <i className={`${service.icon} text-4xl text-skin-base mb-4`} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
          </div>

          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>{service.description}</p>
            {service.description && <p>{service.details}</p>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
