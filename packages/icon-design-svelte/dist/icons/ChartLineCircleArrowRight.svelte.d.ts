import { SvelteComponent } from 'svelte';

export interface ChartLineCircleArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircleArrowRight extends SvelteComponent<ChartLineCircleArrowRightProps> {}
