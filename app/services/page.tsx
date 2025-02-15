"use client";

import ServiceFilter from "@/Components/ServiceItem/ServiceFilter";
import ServiceItem from "@/Components/ServiceItem/ServiceItem";
import ServiceModal from "@/Components/ServiceItem/ServiceModal";
import Title from "@/Components/Title/Title";
import { categories, Service, ServiceCategory, services } from "@/utils/service";
import { motion } from "framer-motion";

import { useState } from "react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = services.filter(
    (service) => activeCategory === "all" || service.category === activeCategory
  );

  return (
    <section className="block lg:ml-0 min-h-screen bg-white dark:bg-gray-900 p-8">
      <div className="max-w7xl mx-auto">
        <Title title="Serviços" />

        <ServiceFilter
          categories={[...categories]}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredServices.map((service, index) => (
            <ServiceItem key={index} {...service} onViewDetails={setSelectedService} />
          ))}
        </motion.div>

        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      </div>
    </section>
  );
}
