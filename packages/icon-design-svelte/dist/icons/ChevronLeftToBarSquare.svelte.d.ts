import { SvelteComponent } from 'svelte';

export interface ChevronLeftToBarSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronLeftToBarSquare extends SvelteComponent<ChevronLeftToBarSquareProps> {}
