import { SvelteComponent } from 'svelte';

export interface ArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUp extends SvelteComponent<ArrowUpProps> {}
