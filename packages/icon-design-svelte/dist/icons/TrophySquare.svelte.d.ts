import { SvelteComponent } from 'svelte';

export interface TrophySquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrophySquare extends SvelteComponent<TrophySquareProps> {}
