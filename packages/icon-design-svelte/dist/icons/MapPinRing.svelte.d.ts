import { SvelteComponent } from 'svelte';

export interface MapPinRingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinRing extends SvelteComponent<MapPinRingProps> {}
