import { SvelteComponent } from 'svelte';

export interface BuildingAnnexSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingAnnexSlanted extends SvelteComponent<BuildingAnnexSlantedProps> {}
