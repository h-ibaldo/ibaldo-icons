import { SvelteComponent } from 'svelte';

export interface ChevronRightToBarSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronRightToBarSquare extends SvelteComponent<ChevronRightToBarSquareProps> {}
