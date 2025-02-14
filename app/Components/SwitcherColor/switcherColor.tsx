"use client";

import React, { useEffect, useRef, useState } from "react";
import { useModal } from "../Context/ModalContext";

const colors = [
  { name: "color1", color: "#ec1839" },
  { name: "color2", color: "#fa5b0f" },
  { name: "color3", color: "#37b182" },
  { name: "color4", color: "#1854b4" },
  { name: "color5", color: "#f021b2" },
  { name: "color6", color: "#ff8c69" },
  { name: "color7", color: "#8b4513" },
  { name: "color8", color: "#e57373" },
  { name: "color9", color: "#f39c12" },
  { name: "color10", color: "#6666cc" },
];

export default function SwitcherColor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { openModal } = useModal();
  const switcherRef = useRef<HTMLDivElement>(null);

  const handleColorClick = (colorInfor: { name: string; color: string }) => {
    document.documentElement.style.setProperty("--skin-color", colorInfor.color);
  };

  const toggleSwitcher = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("activeColor");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark");
    }

    if (savedColor) {
      const colorInfo = colors.find((c) => c.name === savedColor);
      if (colorInfo) {
        handleColorClick(colorInfo);
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (openModal) return null;

  return (
    <div
      ref={switcherRef}
      className={`fixed right-0 top-16 p-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 z-50 rounded-lg transition-transform duration-300 ${
        isOpen ? "translate-x-[-45px]" : "translate-x-full"
      }`}
    >
      {/* Botão de Configurações */}
      <button
        onClick={toggleSwitcher}
        className="absolute w-10 h-10 text-center text-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 -left-[60px] top-0 cursor-pointer rounded-full flex items-center justify-center"
      >
        <i className="fas fa-cog fa-spin"></i>
      </button>

      {/* Botão Dark/Light */}
      <button
        onClick={toggleTheme}
        className="absolute w-10 h-10 text-center text-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 -left-[60px] top-14 cursor-pointer rounded-full flex items-center justify-center"
      >
        <i className={`fas ${isDark ? "fa-moon" : "fa-sun"}`}></i>
      </button>
      <h4 className="text-gray-700 dark:text-gray-300 text-base font-semibold mb-2">
        Tema de cores
      </h4>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-2">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorClick(color)}
            className="w-7 h-7 rounded-full cursor-pointer"
            style={{ backgroundColor: color.color }}
            aria-label={`Selecionar cor ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
}
