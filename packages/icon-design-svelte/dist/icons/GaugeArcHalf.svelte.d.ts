import { SvelteComponent } from 'svelte';

export interface GaugeArcHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeArcHalf extends SvelteComponent<GaugeArcHalfProps> {}
