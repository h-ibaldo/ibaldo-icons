import { SvelteComponent } from 'svelte';

export interface ChartBarCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCircleCheck extends SvelteComponent<ChartBarCircleCheckProps> {}
