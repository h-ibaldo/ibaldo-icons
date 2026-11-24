import { SvelteComponent } from 'svelte';

export interface ArrowDownToDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownToDot extends SvelteComponent<ArrowDownToDotProps> {}
