import { SvelteComponent } from 'svelte';

export interface GearMultipleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearMultiple extends SvelteComponent<GearMultipleProps> {}
