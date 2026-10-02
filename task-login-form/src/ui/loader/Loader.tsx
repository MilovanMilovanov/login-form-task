import type { ReactNode } from "react";
import styles from "./loader.module.scss";

interface LoaderProps {
  children: ReactNode;
  className?: string;
}

export default function Loader({ className = "", children }: LoaderProps) {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
}
