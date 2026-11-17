import { SvelteComponent } from 'svelte';

export interface HouseDoorChimneyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseDoorChimney extends SvelteComponent<HouseDoorChimneyProps> {}
