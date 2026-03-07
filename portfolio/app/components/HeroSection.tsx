import Image from "next/image";
import type { SiteLanguage } from "@/app/i18n";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  language: SiteLanguage;
};

const heroDescriptionByLanguage: Record<SiteLanguage, string> = {
  en: "Building 2D experiences that evoke the golden age of 8-bit and 16-bit gaming.",
  "pt-BR": "Criando experiencias 2D que evocam a era de ouro dos games 8-bit e 16-bit.",
};

export function HeroSection({ language }: HeroSectionProps) {
  return (
    <section className={styles.hero} id="quest" aria-labelledby="hero-title">
      <div>
        <p className={styles.levelTag}>LV. 50 UNITY / C# DEVELOPER</p>
        <h1 id="hero-title" className={styles.heroTitle}>
          Alex Gabriel

        </h1>

        <p className={styles.heroDescription}>
          {heroDescriptionByLanguage[language]}
        </p>
        {/* <div className={styles.heroActions}>
          <button type="button" className={`${styles.btn} ${styles.btnPrimary}`}>
            START GAME
          </button>
          <button type="button" className={`${styles.btn} ${styles.btnSecondary}`}>
            LOAD SKILLS
          </button>
        </div> */}
      </div>

      <div className={styles.heroMedia} aria-label="Mascote do estudio em moldura retro">
        <div className={styles.heroPhotoFrame}>
          <div className={styles.heroPhoto}><Image src="/perfil.jpg" alt="Alex Gabriel" width={280} height={350} /></div>
        </div>
      </div>
    </section>
  );
}
