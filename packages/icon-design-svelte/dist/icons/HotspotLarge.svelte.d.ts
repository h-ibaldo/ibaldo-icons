import { SvelteComponent } from 'svelte';

export interface HotspotLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HotspotLarge extends SvelteComponent<HotspotLargeProps> {}
