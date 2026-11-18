import { SvelteComponent } from 'svelte';

export interface GaugeXThreeQuarterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeXThreeQuarter extends SvelteComponent<GaugeXThreeQuarterProps> {}
