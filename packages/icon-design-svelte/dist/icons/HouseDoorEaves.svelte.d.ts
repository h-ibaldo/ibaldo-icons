import { SvelteComponent } from 'svelte';

export interface HouseDoorEavesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseDoorEaves extends SvelteComponent<HouseDoorEavesProps> {}
