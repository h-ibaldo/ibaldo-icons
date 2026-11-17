import { SvelteComponent } from 'svelte';

export interface HouseDoorPentagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseDoorPentagon extends SvelteComponent<HouseDoorPentagonProps> {}
