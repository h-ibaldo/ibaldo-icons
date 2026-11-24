import { SvelteComponent } from 'svelte';

export interface MapPinBaseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinBase extends SvelteComponent<MapPinBaseProps> {}
