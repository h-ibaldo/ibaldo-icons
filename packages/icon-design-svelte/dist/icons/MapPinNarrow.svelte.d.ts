import { SvelteComponent } from 'svelte';

export interface MapPinNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinNarrow extends SvelteComponent<MapPinNarrowProps> {}
