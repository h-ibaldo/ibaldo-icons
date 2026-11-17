import { SvelteComponent } from 'svelte';

export interface BrowserMovieCameraProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserMovieCamera extends SvelteComponent<BrowserMovieCameraProps> {}
