import { SvelteComponent } from 'svelte';

export interface ChevronCornerStaggeredSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronCornerStaggeredSquare extends SvelteComponent<ChevronCornerStaggeredSquareProps> {}
