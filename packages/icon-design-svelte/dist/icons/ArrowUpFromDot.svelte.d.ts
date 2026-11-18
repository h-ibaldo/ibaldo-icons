import { SvelteComponent } from 'svelte';

export interface ArrowUpFromDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpFromDot extends SvelteComponent<ArrowUpFromDotProps> {}
