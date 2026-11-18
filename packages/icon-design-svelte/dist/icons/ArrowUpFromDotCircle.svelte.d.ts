import { SvelteComponent } from 'svelte';

export interface ArrowUpFromDotCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpFromDotCircle extends SvelteComponent<ArrowUpFromDotCircleProps> {}
