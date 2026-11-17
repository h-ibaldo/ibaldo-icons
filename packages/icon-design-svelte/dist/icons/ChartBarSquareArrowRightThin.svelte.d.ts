import { SvelteComponent } from 'svelte';

export interface ChartBarSquareArrowRightThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareArrowRightThin extends SvelteComponent<ChartBarSquareArrowRightThinProps> {}
