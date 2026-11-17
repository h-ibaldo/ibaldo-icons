import { SvelteComponent } from 'svelte';

export interface AirplayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Airplay extends SvelteComponent<AirplayProps> {}
