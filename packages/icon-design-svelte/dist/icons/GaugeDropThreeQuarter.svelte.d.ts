import { SvelteComponent } from 'svelte';

export interface GaugeDropThreeQuarterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeDropThreeQuarter extends SvelteComponent<GaugeDropThreeQuarterProps> {}
