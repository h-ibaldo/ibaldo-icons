import { SvelteComponent } from 'svelte';

export interface ChevronLeftCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronLeftCircleLarge extends SvelteComponent<ChevronLeftCircleLargeProps> {}
