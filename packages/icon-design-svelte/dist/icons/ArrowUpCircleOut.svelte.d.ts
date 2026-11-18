import { SvelteComponent } from 'svelte';

export interface ArrowUpCircleOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpCircleOut extends SvelteComponent<ArrowUpCircleOutProps> {}
