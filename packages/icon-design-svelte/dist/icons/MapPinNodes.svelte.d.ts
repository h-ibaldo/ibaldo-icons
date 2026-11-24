import { SvelteComponent } from 'svelte';

export interface MapPinNodesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinNodes extends SvelteComponent<MapPinNodesProps> {}
