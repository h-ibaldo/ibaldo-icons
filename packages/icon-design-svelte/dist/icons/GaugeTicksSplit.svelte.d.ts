import { SvelteComponent } from 'svelte';

export interface GaugeTicksSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTicksSplit extends SvelteComponent<GaugeTicksSplitProps> {}
