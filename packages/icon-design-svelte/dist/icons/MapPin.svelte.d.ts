import { SvelteComponent } from 'svelte';

export interface MapPinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPin extends SvelteComponent<MapPinProps> {}
