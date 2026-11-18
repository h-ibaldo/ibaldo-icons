import { SvelteComponent } from 'svelte';

export interface ArrowUpToDotCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpToDotCircle extends SvelteComponent<ArrowUpToDotCircleProps> {}
