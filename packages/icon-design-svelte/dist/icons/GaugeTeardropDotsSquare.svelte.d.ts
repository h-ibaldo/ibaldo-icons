import { SvelteComponent } from 'svelte';

export interface GaugeTeardropDotsSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTeardropDotsSquare extends SvelteComponent<GaugeTeardropDotsSquareProps> {}
