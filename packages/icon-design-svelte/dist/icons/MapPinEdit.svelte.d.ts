import { SvelteComponent } from 'svelte';

export interface MapPinEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinEdit extends SvelteComponent<MapPinEditProps> {}
