import { SvelteComponent } from 'svelte';

export interface BinocularsBoxyBandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsBoxyBand extends SvelteComponent<BinocularsBoxyBandProps> {}
