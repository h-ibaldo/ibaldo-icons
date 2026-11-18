import { SvelteComponent } from 'svelte';

export interface GaugeTeardropFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTeardropFlat extends SvelteComponent<GaugeTeardropFlatProps> {}
