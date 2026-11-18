import { SvelteComponent } from 'svelte';

export interface GaugeTeardropHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTeardropHalf extends SvelteComponent<GaugeTeardropHalfProps> {}
