import { SvelteComponent } from 'svelte';

export interface GearSyncLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSyncLarge extends SvelteComponent<GearSyncLargeProps> {}
