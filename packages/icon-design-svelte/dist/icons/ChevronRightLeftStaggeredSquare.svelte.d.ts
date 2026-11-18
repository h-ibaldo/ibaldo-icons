import { SvelteComponent } from 'svelte';

export interface ChevronRightLeftStaggeredSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronRightLeftStaggeredSquare extends SvelteComponent<ChevronRightLeftStaggeredSquareProps> {}
