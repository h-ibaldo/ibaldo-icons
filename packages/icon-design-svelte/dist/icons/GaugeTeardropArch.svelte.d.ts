import { SvelteComponent } from 'svelte';

export interface GaugeTeardropArchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTeardropArch extends SvelteComponent<GaugeTeardropArchProps> {}
