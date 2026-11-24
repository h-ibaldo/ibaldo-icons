import { SvelteComponent } from 'svelte';

export interface SplineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Spline extends SvelteComponent<SplineProps> {}
