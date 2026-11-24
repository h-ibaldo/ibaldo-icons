import { SvelteComponent } from 'svelte';

export interface ChartAreaProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArea extends SvelteComponent<ChartAreaProps> {}
