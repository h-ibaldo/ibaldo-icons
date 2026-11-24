import { SvelteComponent } from 'svelte';

export interface ChartLineSquareArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquareArrowRight extends SvelteComponent<ChartLineSquareArrowRightProps> {}
