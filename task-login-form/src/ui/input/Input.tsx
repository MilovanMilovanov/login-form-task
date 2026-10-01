import type { InputHTMLAttributes } from "react";

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  type: "text" | "password";
  className?: string;
}

export default function Input({ className = "", ...props }: InputProps) {
  return <input className={className} {...props} />;
}
