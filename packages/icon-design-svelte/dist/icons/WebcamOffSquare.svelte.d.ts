import { SvelteComponent } from 'svelte';

export interface WebcamOffSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebcamOffSquare extends SvelteComponent<WebcamOffSquareProps> {}
