import { SvelteComponent } from 'svelte';

export interface CrownBandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrownBand extends SvelteComponent<CrownBandProps> {}
