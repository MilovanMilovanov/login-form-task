import type { ReactNode } from "react";

interface ErrorMessageProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function ErrorMessage({
  id,
  className = "",
  children,
}: ErrorMessageProps) {
  return (
    <span id={id} role="alert" className={className}>
      {children}
    </span>
  );
}
