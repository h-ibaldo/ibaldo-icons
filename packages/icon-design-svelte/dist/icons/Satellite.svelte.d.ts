import { SvelteComponent } from 'svelte';

export interface SatelliteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Satellite extends SvelteComponent<SatelliteProps> {}
