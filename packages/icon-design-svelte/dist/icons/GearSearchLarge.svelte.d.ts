import { SvelteComponent } from 'svelte';

export interface GearSearchLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSearchLarge extends SvelteComponent<GearSearchLargeProps> {}
