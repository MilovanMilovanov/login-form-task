import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  type: "text" | "password";
  className?: string;
}

function Input(
  { className = "", type, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return <input ref={ref} type={type} className={className} {...props} />;
}

export default forwardRef(Input);
