import { SvelteComponent } from 'svelte';

export interface ArrowLeftCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftCircleLarge extends SvelteComponent<ArrowLeftCircleLargeProps> {}
