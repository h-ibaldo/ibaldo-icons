import { SvelteComponent } from 'svelte';

export interface WebsitePortalMoviesCameraProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalMoviesCamera extends SvelteComponent<WebsitePortalMoviesCameraProps> {}
