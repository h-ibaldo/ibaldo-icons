import { SvelteComponent } from 'svelte';

export interface ChartAxisGridProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartAxisGrid extends SvelteComponent<ChartAxisGridProps> {}
