import { SvelteComponent } from 'svelte';

export interface GearStackSpikyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearStackSpiky extends SvelteComponent<GearStackSpikyProps> {}
