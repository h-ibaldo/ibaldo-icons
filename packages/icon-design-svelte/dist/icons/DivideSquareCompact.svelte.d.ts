import { SvelteComponent } from 'svelte';

export interface DivideSquareCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DivideSquareCompact extends SvelteComponent<DivideSquareCompactProps> {}
