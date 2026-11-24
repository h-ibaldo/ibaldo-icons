import { SvelteComponent } from 'svelte';

export interface BuildingDoorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingDoor extends SvelteComponent<BuildingDoorProps> {}
