import { SvelteComponent } from 'svelte';

export interface ArrowUpCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpCircle extends SvelteComponent<ArrowUpCircleProps> {}
