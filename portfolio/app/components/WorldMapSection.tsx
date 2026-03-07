import { SectionTitle } from "./SectionTitle";
import styles from "./WorldMapSection.module.css";
import { fetchItchGames, type ItchGame } from "@/lib/itchIo";
import type { SiteLanguage } from "@/app/i18n";

type WorldMapSectionProps = {
  language: SiteLanguage;
};

const emptyStateByLanguage: Record<SiteLanguage, string> = {
  en: "No games loaded yet. Connect your itch.io fields and mapping to complete this section.",
  "pt-BR": "Nenhum jogo carregado ainda. Conecte os campos da API do itch.io e finalize o mapeamento desta secao.",
};

const gameFallbackByLanguage: Record<SiteLanguage, string> = {
  en: "Game from itch.io",
  "pt-BR": "Jogo do itch.io",
};

export async function WorldMapSection({ language }: WorldMapSectionProps) {
  let games: ItchGame[] = [];

  try {
    games = await fetchItchGames();
  } catch {
    games = [];
  }

  return (
    <section className={styles.contentSection} aria-labelledby="games-title" id="games">
      <SectionTitle
        icon={
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6L9 4L15 6L21 4V18L15 20L9 18L3 20V6Z" strokeWidth="2" />
            <path d="M9 4V18" strokeWidth="2" strokeLinecap="square" />
            <path d="M15 6V20" strokeWidth="2" strokeLinecap="square" />
          </svg>
        }
        title="MY GAMES"
      />

      {games.length === 0 ? (
        <p className={styles.emptyState} id="games-title">
          {emptyStateByLanguage[language]}
        </p>
      ) : (
        <div className={styles.gamesGrid} id="games-title">
          {games.map((game) => (
            <article key={game.id} className={styles.gameCard}>
              <a href={game.url} target="_blank" rel="noreferrer" className={styles.cardLink}>
                <div
                  className={styles.gameCover}
                  style={
                    game.coverUrl
                      ? { backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1)), url(${game.coverUrl})` }
                      : undefined
                  }
                />
                <div className={styles.gameInfo}>
                  <h3>{game.title}</h3>
                  <p>{game.shortText ?? gameFallbackByLanguage[language]}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
