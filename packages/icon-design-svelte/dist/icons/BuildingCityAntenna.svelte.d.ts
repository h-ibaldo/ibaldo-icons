import { SvelteComponent } from 'svelte';

export interface BuildingCityAntennaProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingCityAntenna extends SvelteComponent<BuildingCityAntennaProps> {}
