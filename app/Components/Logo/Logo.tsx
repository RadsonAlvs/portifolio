import Link from "next/link";

interface LogoProps {
  emphasis?: string;
  title: string;
}

export default function Logo({ title, emphasis }: LogoProps) {
  return (
    <div className="absolute top-[50px] text-3xl capitalize">
      <Link
        href="/"
        className="
          relative
          text-gray-900 dark:text-white
          font-semibold
          px-5 py-4
          text-3xl
          tracking-[5px]
          before:content-['']
          before:absolute
          before:w-5 before:h-5
          before:border-b-[5px] before:border-l-[5px]
          before:border-skin-base
          before:bottom-0 before:left-0
          after:content-['']
          after:absolute
          after:w-5 after:h-5
          after:border-t-[5px] after:border-r-[5px]
          after:border-skin-base
          after:top-0 after:right-0
        "
      >
        <span className="font-secondary text-4xl">{emphasis}</span>
        {title}
      </Link>
    </div>
  );
}
