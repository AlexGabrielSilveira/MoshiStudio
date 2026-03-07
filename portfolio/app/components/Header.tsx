"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ChangeEvent } from "react";
import type { SiteLanguage } from "@/app/i18n";
import styles from "./Header.module.css";

const socialLinks = [
  { label: "YOUTUBE", href: "https://www.youtube.com/@MoshiStd" },
  { label: "DISCORD", href: "https://discordapp.com/users/alex7383" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/alexgabrielsilveira/" },
];

type HeaderProps = {
  language: SiteLanguage;
};

export function Header({ language }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value as SiteLanguage;
    const nextParams = new URLSearchParams(searchParams.toString());

    if (nextLanguage === "en") {
      nextParams.delete("lang");
    } else {
      nextParams.set("lang", nextLanguage);
    }

    const queryString = nextParams.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
  };

  return (
    <header className={styles.siteHeader}>
      <div className={styles.brand}>
        <span className={styles.brandAvatar} aria-hidden="true">
          <Image src="/mascote.png" alt="" width={32} height={20} />
        </span>
        <strong>Moshi Studio</strong>
        <label className={styles.languageControl}>
          <span className={styles.srOnly}>Select language</span>
          <select
            className={styles.languageSelect}
            onChange={handleLanguageChange}
            value={language}
            aria-label="Language selector"
          >
            <option value="en">🇺🇸 US</option>
            <option value="pt-BR">🇧🇷 PT-BR</option>
          </select>
        </label>
      </div>

      <nav aria-label="Social links" className={styles.socialNav}>
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            {social.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
