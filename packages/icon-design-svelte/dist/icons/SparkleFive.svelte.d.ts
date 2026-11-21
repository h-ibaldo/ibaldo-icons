import { SvelteComponent } from 'svelte';

export interface SparkleFiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SparkleFive extends SvelteComponent<SparkleFiveProps> {}
