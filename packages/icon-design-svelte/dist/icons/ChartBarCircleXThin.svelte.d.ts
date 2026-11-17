import { SvelteComponent } from 'svelte';

export interface ChartBarCircleXThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCircleXThin extends SvelteComponent<ChartBarCircleXThinProps> {}
