"use client";

import React, { useState } from "react";
import { useModal } from "../Context/ModalContext";
import Logo from "../Logo/Logo";
import NavToggle from "../Nav/NavToggle";
import NavMenu from "../Nav/NavMenu";

export default function Header() {
  const { openModal } = useModal();
  const [openHeader, setOpenHeader] = useState(false);

  if (openModal) return null;

  return (
    <>
      {openHeader && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:block hidden"
          onClick={() => setOpenHeader(false)}
        ></div>
      )}
      <header
        className={`
			bg-gray-100 dark:bg-gray-800
			w-[270px] fixed left-0 top-0 p-7
			h-full z-40 border-r border-gray-200
			dark:border-gray-700 flex justify-center
			items-center transition-all duration-300 lg:left-[-270px]
			${openHeader ? "lg:left-0 lg:z-50" : ""}
			${openHeader ? "md:w-full" : ""}
			transform
		`}
      >
        <Logo emphasis="M" title="enu" />
        <NavToggle openHeader={openHeader} setOpenHeader={setOpenHeader} />
        <NavMenu
          title={["Inicio", "Sobre", "Serviços", "Projetos", "Contato"]}
          iClass={["home", "user", "list", "briefcase", "comments"]}
          href={["", "about", "services", "projects", "contact"]}
        />
      </header>
    </>
  );
}
