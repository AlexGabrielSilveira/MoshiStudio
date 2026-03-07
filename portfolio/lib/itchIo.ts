import "server-only";

import { config } from "@/config";

export type ItchGame = {
  id: number;
  title: string;
  url: string;
  shortText?: string;
  coverUrl?: string;
};

type ItchApiGame = {
  id?: number;
  title?: string;
  url?: string;
  short_text?: string;
  cover_url?: string;
};

type ItchApiResponse = {
  games?: ItchApiGame[];
};

const ITCH_MY_GAMES_ENDPOINT = `https://itch.io/api/1/${config.itchIoApiKey}/my-games`;

export async function fetchItchGames(): Promise<ItchGame[]> {
  const response = await fetch(ITCH_MY_GAMES_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch games from itch.io (status ${response.status})`);
  }

  const payload = (await response.json()) as ItchApiResponse;

  return (payload.games ?? [])
    .filter((game): game is Required<Pick<ItchApiGame, "id" | "title" | "url">> & ItchApiGame => {
      return typeof game.id === "number" && typeof game.title === "string" && typeof game.url === "string";
    })
    .map((game) => ({
      id: game.id,
      title: game.title,
      url: game.url,
      shortText: game.short_text,
      coverUrl: game.cover_url,
    }));
}
