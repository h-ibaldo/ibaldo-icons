import { SvelteComponent } from 'svelte';

export interface ChartBarCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCircle extends SvelteComponent<ChartBarCircleProps> {}
