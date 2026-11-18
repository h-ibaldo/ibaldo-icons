import { SvelteComponent } from 'svelte';

export interface ArrowRightCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightCircleLarge extends SvelteComponent<ArrowRightCircleLargeProps> {}
