import { SvelteComponent } from 'svelte';

export interface SunStarSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunStarSquare extends SvelteComponent<SunStarSquareProps> {}
