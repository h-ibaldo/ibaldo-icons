import { SvelteComponent } from 'svelte';

export interface ChevronLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronLeftCircle extends SvelteComponent<ChevronLeftCircleProps> {}
