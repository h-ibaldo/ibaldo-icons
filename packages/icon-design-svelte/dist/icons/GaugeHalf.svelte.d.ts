import { SvelteComponent } from 'svelte';

export interface GaugeHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeHalf extends SvelteComponent<GaugeHalfProps> {}
