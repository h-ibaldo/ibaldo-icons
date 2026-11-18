import { SvelteComponent } from 'svelte';

export interface ArrowDownCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownCircleLarge extends SvelteComponent<ArrowDownCircleLargeProps> {}
