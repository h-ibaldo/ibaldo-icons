import { SvelteComponent } from 'svelte';

export interface GaugeTeardropOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTeardropOpen extends SvelteComponent<GaugeTeardropOpenProps> {}
