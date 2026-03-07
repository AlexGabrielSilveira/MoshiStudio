import { SectionTitle } from "./SectionTitle";
import type { SiteLanguage } from "@/app/i18n";
import styles from "./QuestSection.module.css";

type QuestSectionProps = {
  language: SiteLanguage;
};

const questParagraphByLanguage: Record<SiteLanguage, string> = {
  en: "Since childhood, I have been passionate about games, especially turn-based RPGs and card games. That passion motivated me to start studying and creating my own games. Moshi Studio is my ambition to make a living from games, and my mission is to create games that entertain my players the same way the games I played in my childhood entertained me.",
  "pt-BR": "Desde pequeno sou apaixonado por jogos, principalmente RPG de turno e card games. Essa paixao me motivou a estudar e criar meus proprios jogos. A Moshi Studio representa minha ambicao de viver de jogos, e minha missao e criar experiencias que divirtam meus jogadores como os jogos da minha infancia me divertiram.",
};

export function QuestSection({ language }: QuestSectionProps) {
  return (
    <section className={styles.contentSection} aria-labelledby="my-quest" id="mode">
      <SectionTitle
        icon={
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 3V21" strokeWidth="2" strokeLinecap="square" />
            <path d="M6 4H18L15 8L18 12H6" strokeWidth="2" strokeLinecap="square" />
          </svg>
        }
        title="MY QUEST"
      />

      <article className={styles.questPanel} id="my-quest">
        <p>{questParagraphByLanguage[language]}</p>
      </article>
    </section>
  );
}
