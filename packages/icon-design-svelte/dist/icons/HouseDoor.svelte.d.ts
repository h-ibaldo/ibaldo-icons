import { SvelteComponent } from 'svelte';

export interface HouseDoorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseDoor extends SvelteComponent<HouseDoorProps> {}
