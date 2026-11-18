import { SvelteComponent } from 'svelte';

export interface GaugeDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeDots extends SvelteComponent<GaugeDotsProps> {}
