import { SvelteComponent } from 'svelte';

export interface SunStarHalfSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunStarHalfSquare extends SvelteComponent<SunStarHalfSquareProps> {}
