import { SvelteComponent } from 'svelte';

export interface ChartLineDownAxisJaggedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineDownAxisJagged extends SvelteComponent<ChartLineDownAxisJaggedProps> {}
