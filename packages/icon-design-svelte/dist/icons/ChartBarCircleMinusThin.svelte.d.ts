import { SvelteComponent } from 'svelte';

export interface ChartBarCircleMinusThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCircleMinusThin extends SvelteComponent<ChartBarCircleMinusThinProps> {}
