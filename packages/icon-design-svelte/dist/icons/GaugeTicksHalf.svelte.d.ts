import { SvelteComponent } from 'svelte';

export interface GaugeTicksHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTicksHalf extends SvelteComponent<GaugeTicksHalfProps> {}
