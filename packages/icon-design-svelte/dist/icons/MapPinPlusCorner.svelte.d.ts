import { SvelteComponent } from 'svelte';

export interface MapPinPlusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinPlusCorner extends SvelteComponent<MapPinPlusCornerProps> {}
