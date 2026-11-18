import { SvelteComponent } from 'svelte';

export interface GaugeMinusThreeQuarterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeMinusThreeQuarter extends SvelteComponent<GaugeMinusThreeQuarterProps> {}
