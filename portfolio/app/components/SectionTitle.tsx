import type { ReactNode } from "react";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  icon: ReactNode;
  title: string;
};

export function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <h2 className={styles.sectionTitle}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span>{title}</span>
    </h2>
  );
}
