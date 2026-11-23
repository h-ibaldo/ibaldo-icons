import { SvelteComponent } from 'svelte';

export interface SquarePaddingBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquarePaddingBottom extends SvelteComponent<SquarePaddingBottomProps> {}
