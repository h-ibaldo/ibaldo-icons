import { SvelteComponent } from 'svelte';

export interface ChartLineUpAxisJaggedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineUpAxisJagged extends SvelteComponent<ChartLineUpAxisJaggedProps> {}
