import { SvelteComponent } from 'svelte';

export interface ArrowUpCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpCircleLarge extends SvelteComponent<ArrowUpCircleLargeProps> {}
