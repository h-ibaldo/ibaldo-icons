import { SvelteComponent } from 'svelte';

export interface BuildingCityProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingCity extends SvelteComponent<BuildingCityProps> {}
