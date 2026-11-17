import { SvelteComponent } from 'svelte';

export interface ArrowUpToDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpToDot extends SvelteComponent<ArrowUpToDotProps> {}
