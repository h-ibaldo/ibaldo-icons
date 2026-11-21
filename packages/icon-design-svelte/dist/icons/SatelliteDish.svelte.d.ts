import { SvelteComponent } from 'svelte';

export interface SatelliteDishProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SatelliteDish extends SvelteComponent<SatelliteDishProps> {}
