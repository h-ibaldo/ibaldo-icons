import { SvelteComponent } from 'svelte';

export interface GaugeFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeFlat extends SvelteComponent<GaugeFlatProps> {}
