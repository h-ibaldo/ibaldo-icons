import { SvelteComponent } from 'svelte';

export interface GaugeArcOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeArcOpen extends SvelteComponent<GaugeArcOpenProps> {}
