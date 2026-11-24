import { SvelteComponent } from 'svelte';

export interface ChartBarSquareArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareArrowRight extends SvelteComponent<ChartBarSquareArrowRightProps> {}
