import { SvelteComponent } from 'svelte';

export interface GaugeTicksDenseDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTicksDenseDrop extends SvelteComponent<GaugeTicksDenseDropProps> {}
