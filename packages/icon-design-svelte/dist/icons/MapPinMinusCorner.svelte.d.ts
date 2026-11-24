import { SvelteComponent } from 'svelte';

export interface MapPinMinusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinMinusCorner extends SvelteComponent<MapPinMinusCornerProps> {}
