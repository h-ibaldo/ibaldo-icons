import { SvelteComponent } from 'svelte';

export interface GaugeTicksSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTicksSquare extends SvelteComponent<GaugeTicksSquareProps> {}
