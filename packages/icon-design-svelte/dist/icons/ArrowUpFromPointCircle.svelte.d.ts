import { SvelteComponent } from 'svelte';

export interface ArrowUpFromPointCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpFromPointCircle extends SvelteComponent<ArrowUpFromPointCircleProps> {}
