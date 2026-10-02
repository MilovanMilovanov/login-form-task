import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  children?: ReactNode;
  action?: () => void;
}

export default function Button({
  className = "",
  isDisabled = false,
  children,
  action,
}: ButtonProps) {
  return (
    <button disabled={isDisabled} className={className} onClick={action}>
      {children}
    </button>
  );
}
