"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMenuProps {
  title: Array<string>;
  iClass: Array<string>;
  href: Array<string>;
}

export default function NavMenu({ title, iClass, href }: NavMenuProps) {
  const pathname = usePathname();

  return (
    <nav className="mt-12">
      <ul>
        {href.map((item, index) => {
          const isActive = pathname === `/${item}`;
          return (
            <li key={index} className="block border-b border-gray-200 dark:border-gray-700">
              <Link
                href={`/${item}`}
                className={`
									block text-base font-semibold p-4
									text-gray-900 dark:text-white
									hover:text-skin-base dark:hover:text-skin-base
									transition-colors duration-200
									${isActive ? "text-skin-base dark:text-skin-base" : ""}
								`}
              >
                <i className={`fa fa-${iClass[index]} mr-4`}></i>
                {title[index]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
