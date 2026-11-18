import { SvelteComponent } from 'svelte';

export interface BuildingGableProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BuildingGable extends SvelteComponent<BuildingGableProps> {}
