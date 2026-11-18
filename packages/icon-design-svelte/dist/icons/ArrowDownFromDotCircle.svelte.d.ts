import { SvelteComponent } from 'svelte';

export interface ArrowDownFromDotCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownFromDotCircle extends SvelteComponent<ArrowDownFromDotCircleProps> {}
