export type SiteLanguage = "en" | "pt-BR";

export function normalizeSiteLanguage(value: string | undefined): SiteLanguage {
  return value === "pt-BR" ? "pt-BR" : "en";
}
