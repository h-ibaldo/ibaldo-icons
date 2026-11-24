import { SvelteComponent } from 'svelte';

export interface SquaresExcludeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquaresExclude extends SvelteComponent<SquaresExcludeProps> {}
