import { SvelteComponent } from 'svelte';

export interface MinusSquareCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusSquareCompact extends SvelteComponent<MinusSquareCompactProps> {}
