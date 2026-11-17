import { SvelteComponent } from 'svelte';

export interface HotspotDotsLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HotspotDotsLarge extends SvelteComponent<HotspotDotsLargeProps> {}
