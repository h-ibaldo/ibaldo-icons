import { SvelteComponent } from 'svelte';

export interface HouseDoorGroundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseDoorGround extends SvelteComponent<HouseDoorGroundProps> {}
