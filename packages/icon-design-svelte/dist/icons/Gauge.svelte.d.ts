import { SvelteComponent } from 'svelte';

export interface GaugeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Gauge extends SvelteComponent<GaugeProps> {}
