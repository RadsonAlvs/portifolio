"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface NavToggleProps {
  setOpenHeader: Dispatch<SetStateAction<boolean>>;
  openHeader: boolean;
}

export default function NavToggle({ setOpenHeader, openHeader }: NavToggleProps) {
  const [openNav, setOpenNav] = useState(false);
  const [section, setsection] = useState(true);

  useEffect(() => {
    const containerSection = document.querySelector(".containerSection");

    if (section) {
      containerSection?.classList.add("active");
    } else {
      containerSection?.classList.remove("active");
    }

    function handleNavClick() {
      setOpenNav(!openNav);
      setOpenHeader(!openHeader);
    }

    function handleOutsideClick(event: MouseEvent) {
      const navToggle = document.querySelector("#navToggle");
      if (navToggle && !navToggle.contains(event.target as Node)) {
        setOpenNav(false);
        setOpenHeader(false);
        setsection(true);
      }
    }

    const media = window.matchMedia("(max-width: 1200px)");

    if (media.matches) {
      const liHref = document.querySelectorAll("li a");

      liHref.forEach((link) => {
        link.addEventListener("click", handleNavClick);
      });

      document.addEventListener("click", handleOutsideClick);

      return () => {
        liHref.forEach((link) => {
          link.removeEventListener("click", handleNavClick);
        });
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [openNav, section, openHeader, setOpenHeader]);

  function handleClick() {
    setOpenNav(!openNav);
    setOpenHeader(!openHeader);
    setsection(!section);
  }

  return (
    <button
      id="navToggle"
      onClick={handleClick}
      className={`
				fixed h-10 w-[45px] border border-gray-300 dark:border-gray-600
				cursor-pointer left-[45px] top-5 rounded-md hidden bg-white dark:bg-gray-800
				justify-center items-center transition-all duration-300
				lg:flex
				${openNav ? "lg:left-[315px] md:left-[80%]" : ""}
			`}
    >
      <span
        className={`
					relative w-[18px] h-[2px] bg-skin-base inline-block
					before:content-[''] before:absolute before:w-[18px] before:h-[2px]
					before:bg-skin-base before:-top-1.5 before:left-0
					after:content-[''] after:absolute after:w-[18px] after:h-[2px]
					after:bg-skin-base after:top-1.5 after:right-0
					${openNav ? "h-0 before:top-0 before:rotate-45 after:top-0 after:rotate-45" : ""}
				`}
      />
    </button>
  );
}
