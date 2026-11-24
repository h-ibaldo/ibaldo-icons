import { SvelteComponent } from 'svelte';

export interface BuildingCityCorniceProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingCityCornice extends SvelteComponent<BuildingCityCorniceProps> {}
