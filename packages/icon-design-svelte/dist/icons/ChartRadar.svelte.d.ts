import { SvelteComponent } from 'svelte';

export interface ChartRadarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartRadar extends SvelteComponent<ChartRadarProps> {}
