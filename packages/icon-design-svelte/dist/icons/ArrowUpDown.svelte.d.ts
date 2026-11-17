import { SvelteComponent } from 'svelte';

export interface ArrowUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpDown extends SvelteComponent<ArrowUpDownProps> {}
