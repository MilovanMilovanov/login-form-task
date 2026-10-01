import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  action?: () => void;
}

export default function Button({
  className = "",
  children,
  action,
}: ButtonProps) {
  return (
    <button className={className} onClick={action}>
      {children}
    </button>
  );
}
