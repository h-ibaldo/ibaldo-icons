import { SvelteComponent } from 'svelte';

export interface MapPinMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinMinus extends SvelteComponent<MapPinMinusProps> {}
