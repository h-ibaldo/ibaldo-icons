import { SvelteComponent } from 'svelte';

export interface MinusSquareCompactLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusSquareCompactLarge extends SvelteComponent<MinusSquareCompactLargeProps> {}
