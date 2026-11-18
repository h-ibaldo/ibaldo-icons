import { SvelteComponent } from 'svelte';

export interface GaugeDropSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeDropSquare extends SvelteComponent<GaugeDropSquareProps> {}
