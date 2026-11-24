import { SvelteComponent } from 'svelte';

export interface ArrowDownFromDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownFromDot extends SvelteComponent<ArrowDownFromDotProps> {}
