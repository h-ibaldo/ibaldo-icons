import { SvelteComponent } from 'svelte';

export interface ArrowDownLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownLeftCircle extends SvelteComponent<ArrowDownLeftCircleProps> {}
