import { SvelteComponent } from 'svelte';

export interface ChevronUpDownStaggeredSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpDownStaggeredSquare extends SvelteComponent<ChevronUpDownStaggeredSquareProps> {}
