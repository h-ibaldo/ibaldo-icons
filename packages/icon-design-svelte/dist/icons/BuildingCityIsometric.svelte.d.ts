import { SvelteComponent } from 'svelte';

export interface BuildingCityIsometricProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingCityIsometric extends SvelteComponent<BuildingCityIsometricProps> {}
