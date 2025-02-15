import css from "../assets/svg/css.svg";
import html from "../assets/svg/html.svg";
import react from "../assets/svg/react.svg";
import styledcomponents from "../assets/svg/styled-components.svg";
import tailwindcss from "../assets/svg/tailwindcss.svg";
import vite from "../assets/svg/vite.svg";
import sass from "../assets/svg/sass.svg";
import gulp from "../assets/svg/gulp.svg";
import redux from "../assets/svg/redux.svg";
import javascript from "../assets/svg/javascript.svg";
import typescript from "../assets/svg/typescript.svg";
import webpack from "../assets/svg/webpack.svg";
import figma from "../assets/svg/figma.svg";
import docker from "../assets/svg/docker.svg";
import git from "../assets/svg/git.svg";
import github from "../assets/svg/github.svg";
import node from "../assets/svg/node.svg";
import mysql from "../assets/svg/mysql.svg";
import mongodb from "../assets/svg/mongodb.svg";
import prisma from "../assets/svg/prisma.svg";
import fastify from "../assets/svg/fastify.svg";
import express from "../assets/svg/express.svg";
import eslint from "../assets/svg/eslint.svg";

export type SkillCategory = "frontend" | "backend" | "tools" | "all";

export interface Skill {
  skill: string;
  icon: string;
  href: string;
  category: string;
}

export const skills: Skill[] = [
  {
    skill: "CSS",
    icon: css,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    category: "frontend",
  },
  {
    skill: "HTML",
    icon: html,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    category: "frontend",
  },
  { skill: "React", icon: react, href: "https://react.dev/learn", category: "frontend" },
  {
    skill: "Styled Components",
    icon: styledcomponents,
    href: "https://styled-components.com/docs",
    category: "frontend",
  },
  {
    skill: "Tailwind CSS",
    icon: tailwindcss,
    href: "https://tailwindcss.com/docs/installation/using-vite",
    category: "frontend",
  },
  { skill: "Vite", icon: vite, href: "https://vite.dev/guide/", category: "frontend" },
  { skill: "Sass", icon: sass, href: "https://sass-lang.com/", category: "frontend" },
  { skill: "Gulp", icon: gulp, href: "https://gulpjs.com/", category: "frontend" },
  {
    skill: "Webpack",
    icon: webpack,
    href: "https://webpack.js.org/concepts/",
    category: "frontend",
  },

  { skill: "Figma", icon: figma, href: "https://www.figma.com/pt-br/", category: "tools" },
  {
    skill: "Redux",
    icon: redux,
    href: "https://redux.js.org/introduction/getting-started",
    category: "tools",
  },
  {
    skill: "JavaScript",
    icon: javascript,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    category: "tools",
  },
  {
    skill: "TypeScript",
    icon: typescript,
    href: "https://www.typescriptlang.org/",
    category: "tools",
  },
  { skill: "Docker", icon: docker, href: "https://www.docker.com/", category: "tools" },
  { skill: "Git", icon: git, href: "https://git-scm.com/", category: "tools" },
  { skill: "GitHub", icon: github, href: "https://github.com/RadsonAlvs", category: "tools" },

  { skill: "Node.js", icon: node, href: "https://nodejs.org/pt", category: "backend" },
  { skill: "MySQL", icon: mysql, href: "https://dev.mysql.com/doc/", category: "backend" },
  { skill: "MongoDB", icon: mongodb, href: "https://www.mongodb.com/pt-br", category: "backend" },
  { skill: "Prisma", icon: prisma, href: "https://www.prisma.io/docs", category: "backend" },
  {
    skill: "Fastify",
    icon: fastify,
    href: "https://fastify.dev/docs/latest/",
    category: "backend",
  },
  {
    skill: "Express",
    icon: express,
    href: "https://expressjs.com/pt-br/guide/routing.html",
    category: "backend",
  },
  {
    skill: "Eslint",
    icon: eslint,
    href: "https://eslint.org/",
    category: "frontend",
  },
];

export const categories: { id: SkillCategory; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Ferramentas" },
];
