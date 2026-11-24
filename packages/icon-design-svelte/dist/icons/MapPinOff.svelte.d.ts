import { SvelteComponent } from 'svelte';

export interface MapPinOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinOff extends SvelteComponent<MapPinOffProps> {}
