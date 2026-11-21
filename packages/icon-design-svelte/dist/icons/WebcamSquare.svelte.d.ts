import { SvelteComponent } from 'svelte';

export interface WebcamSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebcamSquare extends SvelteComponent<WebcamSquareProps> {}
