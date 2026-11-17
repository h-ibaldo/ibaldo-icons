import { SvelteComponent } from 'svelte';

export interface GaugeTicksDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTicksDrop extends SvelteComponent<GaugeTicksDropProps> {}
