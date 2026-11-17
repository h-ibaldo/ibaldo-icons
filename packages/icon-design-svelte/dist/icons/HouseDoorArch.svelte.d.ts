import { SvelteComponent } from 'svelte';

export interface HouseDoorArchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseDoorArch extends SvelteComponent<HouseDoorArchProps> {}
