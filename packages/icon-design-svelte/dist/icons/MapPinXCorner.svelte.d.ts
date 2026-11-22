import { SvelteComponent } from 'svelte';

export interface MapPinXCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinXCorner extends SvelteComponent<MapPinXCornerProps> {}
