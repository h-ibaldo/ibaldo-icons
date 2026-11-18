import { SvelteComponent } from 'svelte';

export interface GaugeTicksFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTicksFlat extends SvelteComponent<GaugeTicksFlatProps> {}
