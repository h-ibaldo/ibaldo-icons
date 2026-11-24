import { SvelteComponent } from 'svelte';

export interface ChevronCornerStaggeredSquareLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronCornerStaggeredSquareLarge extends SvelteComponent<ChevronCornerStaggeredSquareLargeProps> {}
