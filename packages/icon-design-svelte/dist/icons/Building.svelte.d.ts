import { SvelteComponent } from 'svelte';

export interface BuildingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Building extends SvelteComponent<BuildingProps> {}
