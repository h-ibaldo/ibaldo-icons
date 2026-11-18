import { SvelteComponent } from 'svelte';

export interface BuildingSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingSlanted extends SvelteComponent<BuildingSlantedProps> {}
