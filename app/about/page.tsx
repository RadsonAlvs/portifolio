"use client";

import { useState } from "react";
import Button from "../Components/Button/Button";
import TimeLineItem from "../Components/TimeLineItem/TimeLineItem";
import Title from "../Components/Title/Title";
import { TextICTS, TextRealCarshop, TextBlocoDesign } from "../utils/texts";
import { categories, SkillCategory, skills } from "../utils/skills";
import SkillFilter from "../Components/Skills/SkillFilter";
import { motion, AnimatePresence } from "framer-motion";
import SkillItem from "../Components/Skills/SkillItem";

export default function About() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section className="block ml-0 min-h-screen bg-white dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <Title title="About me" />
        <div className="mx-4">
          {/*Educação e Experiência */}
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {/*Educação */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Educação</h3>
              <div className="bg-gray-50 dark:bg-gray-800 mb-10 p-6 rounded-lg">
                <TimeLineItem
                  date="2021 - 2023"
                  title="Análise e Desenvolvimento de Sistemas"
                  subtitle="Tecnólogo"
                  text="Especializado em Análise e Desenvolvimento de Sistemas, com foco em arquitetura de software e desenvolvimento de aplicações. Experiência em modelagem de dados, gestão de projetos e requisitos."
                />
              </div>
            </div>
            {/*Experiência */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold tebxt-gray-900 dark:text-white mb-8">
                Experiência
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 mb-10 p-6 rounded-lg">
                <TimeLineItem
                  date="2022 - 2023"
                  title="Desenvolvedor Fullstack"
                  subtitle="Grupo ICTS"
                  text={TextICTS}
                />
                <TimeLineItem
                  date="2024"
                  title="Desenvolvedor Fullstack"
                  subtitle="Real Carshop"
                  text={TextRealCarshop}
                />
                <TimeLineItem
                  date="2024 - atualmente"
                  title="Desenvolvedor Fullstack"
                  subtitle="Bloco Design"
                  text={TextBlocoDesign}
                />
              </div>
            </div>
          </div>
          {/*Botões e Skills */}
          <div className="flex flex-col md:flex-row gap-8">
            {/*Botões */}
            <div className="w-full md:w-3/5">
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  href="https://drive.google.com/uc?export=download&id=1XhN5Iz1isJPlacsR-0jbfNmw4zSN6w-s"
                  download
                >
                  Download CV
                </Button>
                <Button href="contact">Contact me</Button>
              </div>
            </div>
            {/*Skills */}
            <div className="w-full md:w-2/5 pl-0 md:pl-8">
              <SkillFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              <motion.div
                layout
                className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-11 items-center justify-items-center"
              >
                <AnimatePresence>
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.skill}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SkillItem {...skill} index={index} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
