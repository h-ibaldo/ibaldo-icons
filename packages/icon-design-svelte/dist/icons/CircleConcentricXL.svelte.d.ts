import { SvelteComponent } from 'svelte';

export interface CircleConcentricXLProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleConcentricXL extends SvelteComponent<CircleConcentricXLProps> {}
