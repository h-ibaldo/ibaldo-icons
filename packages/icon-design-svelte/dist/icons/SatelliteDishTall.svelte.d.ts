import { SvelteComponent } from 'svelte';

export interface SatelliteDishTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SatelliteDishTall extends SvelteComponent<SatelliteDishTallProps> {}
