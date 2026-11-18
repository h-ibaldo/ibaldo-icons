import { SvelteComponent } from 'svelte';

export interface CircleCrescentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleCrescent extends SvelteComponent<CircleCrescentProps> {}
