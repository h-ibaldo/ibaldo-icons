import { SvelteComponent } from 'svelte';

export interface GaugeArchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeArch extends SvelteComponent<GaugeArchProps> {}
