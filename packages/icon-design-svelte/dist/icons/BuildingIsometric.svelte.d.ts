import { SvelteComponent } from 'svelte';

export interface BuildingIsometricProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingIsometric extends SvelteComponent<BuildingIsometricProps> {}
