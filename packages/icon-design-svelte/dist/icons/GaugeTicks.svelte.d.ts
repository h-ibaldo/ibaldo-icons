import { SvelteComponent } from 'svelte';

export interface GaugeTicksProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTicks extends SvelteComponent<GaugeTicksProps> {}
