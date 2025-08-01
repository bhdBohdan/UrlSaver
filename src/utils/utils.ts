export function isValidHttpUrl(string: string): boolean {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export function guessTitleFromURL(url: string): string {
  const urlObj = new URL(url);
  const domain = urlObj.hostname;
  const path = urlObj.pathname.replace(/[-_/]/g, " ").replace(/[._/]/g, " ");
  return `${domain} - ${path.trim()}`;
}
