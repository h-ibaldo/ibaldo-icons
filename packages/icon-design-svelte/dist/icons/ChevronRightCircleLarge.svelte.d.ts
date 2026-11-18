import { SvelteComponent } from 'svelte';

export interface ChevronRightCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronRightCircleLarge extends SvelteComponent<ChevronRightCircleLargeProps> {}
