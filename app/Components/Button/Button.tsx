"use client";
import Link from "next/link";
import { ComponentProps, MouseEvent, ReactNode, useState } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  href?: string;
  download?: boolean;
  variant?: ButtonVariant;
  loading?: boolean;
}

export default function Button({
  href,
  children,
  type,
  disabled,
  download,
  variant = "primary",
  loading = false,
}: ButtonProps) {
  const [rippleArray, setRippleArray] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const variantClasses = {
    primary: "bg-skin-base text-white hover:bg-skin-base/90",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-skin-base text-skin-base bg-transparent hover:bg-skin-base/10",
  };

  const baseClasses = `
		relative text-base font-first
		font-semibold px-[35px] py-3
		border-none rounded-full transition-all
		duration-300 ease-in-out inline-block
		text-center overflow-hidden hover:scale-105
		disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
		${variantClasses[variant]} ${loading ? "cursor-wait" : ""}
	`;

  const handleRiplle = (e: MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRippleArray((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRippleArray((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 1000);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (!disabled && !loading) {
      handleRiplle(e);
      setTimeout(() => {
        const containerSection = document.querySelector(".containerSection");
        containerSection?.classList.add("active");
      }, 100);
    }
  };

  const renderRipples = () => {
    return rippleArray.map((ripple) => (
      <span
        key={ripple.id}
        className="absolute bg-white/30 rounded-full animate-ripple"
        style={{
          left: ripple.x,
          top: ripple.y,
          transform: "translate(-50%, -50%)",
          width: "100px",
          height: "100px",
        }}
      />
    ));
  };

  const renderContent = () => {
    return (
      <>
        {children}
        {loading && (
          <span className="ml-2 inline-block animate-spin">
            <i className="fas fa-spinner" />
          </span>
        )}
        {renderRipples()}
      </>
    );
  };
  if (href && !download) {
    return (
      <Link href={`/${href}`} className={baseClasses} onClick={handleClick}>
        {renderContent()}
      </Link>
    );
  }
  if (download && href) {
    return (
      <a href={href} download className={baseClasses} onClick={handleClick}>
        {renderContent()}
      </a>
    );
  }
  return (
    <button
      className={baseClasses}
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {renderContent()}
    </button>
  );
}
