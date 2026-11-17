import { SvelteComponent } from 'svelte';

export interface ChartLineCircle3CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle3Check extends SvelteComponent<ChartLineCircle3CheckProps> {}
