import { SvelteComponent } from 'svelte';

export interface HotspotSidesLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HotspotSidesLarge extends SvelteComponent<HotspotSidesLargeProps> {}
