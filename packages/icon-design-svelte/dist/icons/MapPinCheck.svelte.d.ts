import { SvelteComponent } from 'svelte';

export interface MapPinCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinCheck extends SvelteComponent<MapPinCheckProps> {}
