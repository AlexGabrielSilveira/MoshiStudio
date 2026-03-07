import "server-only";

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const config = {
  itchIoApiKey: getRequiredEnv("ITCH_IO_API_KEY"),
} as const;
