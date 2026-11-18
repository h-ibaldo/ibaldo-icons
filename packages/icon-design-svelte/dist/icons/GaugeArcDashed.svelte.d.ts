import { SvelteComponent } from 'svelte';

export interface GaugeArcDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeArcDashed extends SvelteComponent<GaugeArcDashedProps> {}
