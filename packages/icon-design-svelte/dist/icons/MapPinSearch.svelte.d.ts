import { SvelteComponent } from 'svelte';

export interface MapPinSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinSearch extends SvelteComponent<MapPinSearchProps> {}
