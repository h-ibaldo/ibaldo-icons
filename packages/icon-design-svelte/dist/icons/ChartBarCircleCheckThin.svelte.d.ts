import { SvelteComponent } from 'svelte';

export interface ChartBarCircleCheckThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCircleCheckThin extends SvelteComponent<ChartBarCircleCheckThinProps> {}
