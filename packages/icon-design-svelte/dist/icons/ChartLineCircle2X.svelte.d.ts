import { SvelteComponent } from 'svelte';

export interface ChartLineCircle2XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle2X extends SvelteComponent<ChartLineCircle2XProps> {}
