import { SvelteComponent } from 'svelte';

export interface PlaySquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlaySquare extends SvelteComponent<PlaySquareProps> {}
