import { SvelteComponent } from 'svelte';

export interface ChartBarSquareCheckThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareCheckThin extends SvelteComponent<ChartBarSquareCheckThinProps> {}
