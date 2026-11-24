import { SvelteComponent } from 'svelte';

export interface GaugeArcFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeArcFlat extends SvelteComponent<GaugeArcFlatProps> {}
