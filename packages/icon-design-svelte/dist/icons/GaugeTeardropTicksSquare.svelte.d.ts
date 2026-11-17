import { SvelteComponent } from 'svelte';

export interface GaugeTeardropTicksSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTeardropTicksSquare extends SvelteComponent<GaugeTeardropTicksSquareProps> {}
