import { SvelteComponent } from 'svelte';

export interface ArrowUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpRight extends SvelteComponent<ArrowUpRightProps> {}
