import { SvelteComponent } from 'svelte';

export interface SkipBackDoubleThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipBackDoubleThick extends SvelteComponent<SkipBackDoubleThickProps> {}
