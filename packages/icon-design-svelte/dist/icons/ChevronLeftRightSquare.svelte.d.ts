import { SvelteComponent } from 'svelte';

export interface ChevronLeftRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronLeftRightSquare extends SvelteComponent<ChevronLeftRightSquareProps> {}
