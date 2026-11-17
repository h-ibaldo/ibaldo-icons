import { SvelteComponent } from 'svelte';

export interface ChartLineCircle3XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle3X extends SvelteComponent<ChartLineCircle3XProps> {}
