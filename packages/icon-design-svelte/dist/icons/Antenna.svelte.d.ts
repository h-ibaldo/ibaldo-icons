import { SvelteComponent } from 'svelte';

export interface AntennaProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Antenna extends SvelteComponent<AntennaProps> {}
