import { guessTitleFromURL } from "../utils/utils";

export class Link {
  id: string;
  title: string;
  url: string;

  constructor(link: string) {
    this.id = new Date().toISOString();
    this.url = link;
    this.title = guessTitleFromURL(link);
  }
}
