import { SvelteComponent } from 'svelte';

export interface BuildingAnnexProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingAnnex extends SvelteComponent<BuildingAnnexProps> {}
