import { SvelteComponent } from 'svelte';

export interface MapPinCheckCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinCheckCorner extends SvelteComponent<MapPinCheckCornerProps> {}
