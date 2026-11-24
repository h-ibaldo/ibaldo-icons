import { SvelteComponent } from 'svelte';

export interface GaugeTeardropDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTeardropDashed extends SvelteComponent<GaugeTeardropDashedProps> {}
