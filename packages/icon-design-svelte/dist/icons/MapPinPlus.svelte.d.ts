import { SvelteComponent } from 'svelte';

export interface MapPinPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinPlus extends SvelteComponent<MapPinPlusProps> {}
