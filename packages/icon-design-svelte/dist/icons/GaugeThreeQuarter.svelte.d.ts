import { SvelteComponent } from 'svelte';

export interface GaugeThreeQuarterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeThreeQuarter extends SvelteComponent<GaugeThreeQuarterProps> {}
