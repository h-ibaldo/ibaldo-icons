import { SvelteComponent } from 'svelte';

export interface ChartBarSquareXThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareXThin extends SvelteComponent<ChartBarSquareXThinProps> {}
