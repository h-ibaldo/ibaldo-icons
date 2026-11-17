import { SvelteComponent } from 'svelte';

export interface CircleConcentricXSProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleConcentricXS extends SvelteComponent<CircleConcentricXSProps> {}
