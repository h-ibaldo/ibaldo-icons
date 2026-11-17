import { SvelteComponent } from 'svelte';

export interface GaugeDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeDrop extends SvelteComponent<GaugeDropProps> {}
