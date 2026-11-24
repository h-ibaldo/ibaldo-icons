import { SvelteComponent } from 'svelte';

export interface GaugeDotsSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeDotsSquare extends SvelteComponent<GaugeDotsSquareProps> {}
