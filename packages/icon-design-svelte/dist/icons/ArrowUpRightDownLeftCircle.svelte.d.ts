import { SvelteComponent } from 'svelte';

export interface ArrowUpRightDownLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpRightDownLeftCircle extends SvelteComponent<ArrowUpRightDownLeftCircleProps> {}
