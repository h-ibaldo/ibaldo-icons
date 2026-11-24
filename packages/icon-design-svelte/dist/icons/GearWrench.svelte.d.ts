import { SvelteComponent } from 'svelte';

export interface GearWrenchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearWrench extends SvelteComponent<GearWrenchProps> {}
