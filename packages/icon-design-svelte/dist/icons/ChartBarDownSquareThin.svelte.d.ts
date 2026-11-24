import { SvelteComponent } from 'svelte';

export interface ChartBarDownSquareThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarDownSquareThin extends SvelteComponent<ChartBarDownSquareThinProps> {}
