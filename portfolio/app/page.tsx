

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { QuestSection } from "./components/QuestSection";
import { WorldMapSection } from "./components/WorldMapSection";
import { normalizeSiteLanguage } from "./i18n";
import styles from "./page.module.css";

type HomeProps = {
  searchParams?: Promise<{ lang?: string }> | { lang?: string };
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const language = normalizeSiteLanguage(resolvedSearchParams.lang);

  return (
    <main className={styles.siteShell}>
      <div className={styles.pageContainer}>
        <Header language={language} />
        <HeroSection language={language} />
        <QuestSection language={language} />
        <WorldMapSection language={language} />
        <Footer />
      </div>
    </main>
  );
}
