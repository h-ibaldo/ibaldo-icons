import { SvelteComponent } from 'svelte';

export interface GaugeDropDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeDropDashed extends SvelteComponent<GaugeDropDashedProps> {}
