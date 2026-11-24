import { SvelteComponent } from 'svelte';

export interface MapPinDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinDot extends SvelteComponent<MapPinDotProps> {}
