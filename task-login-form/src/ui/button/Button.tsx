import type { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  action: () => {};
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
