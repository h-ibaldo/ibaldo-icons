import { SvelteComponent } from 'svelte';

export interface WebsitePortalMoviesFilmProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalMoviesFilm extends SvelteComponent<WebsitePortalMoviesFilmProps> {}
