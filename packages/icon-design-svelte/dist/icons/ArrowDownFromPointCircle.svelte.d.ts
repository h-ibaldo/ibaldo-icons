import { SvelteComponent } from 'svelte';

export interface ArrowDownFromPointCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownFromPointCircle extends SvelteComponent<ArrowDownFromPointCircleProps> {}
