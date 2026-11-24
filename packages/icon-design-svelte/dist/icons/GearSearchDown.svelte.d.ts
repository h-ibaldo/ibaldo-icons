import { SvelteComponent } from 'svelte';

export interface GearSearchDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSearchDown extends SvelteComponent<GearSearchDownProps> {}
