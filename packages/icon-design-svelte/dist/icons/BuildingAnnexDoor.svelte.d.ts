import { SvelteComponent } from 'svelte';

export interface BuildingAnnexDoorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingAnnexDoor extends SvelteComponent<BuildingAnnexDoorProps> {}
