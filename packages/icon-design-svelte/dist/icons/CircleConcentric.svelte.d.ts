import { SvelteComponent } from 'svelte';

export interface CircleConcentricProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleConcentric extends SvelteComponent<CircleConcentricProps> {}
