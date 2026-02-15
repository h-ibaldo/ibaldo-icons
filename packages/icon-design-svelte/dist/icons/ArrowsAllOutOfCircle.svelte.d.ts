import { SvelteComponent } from 'svelte';

export interface ArrowsAllOutOfCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsAllOutOfCircle extends SvelteComponent<ArrowsAllOutOfCircleProps> {}
