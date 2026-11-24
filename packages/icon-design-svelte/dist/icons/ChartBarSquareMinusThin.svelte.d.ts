import { SvelteComponent } from 'svelte';

export interface ChartBarSquareMinusThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareMinusThin extends SvelteComponent<ChartBarSquareMinusThinProps> {}
