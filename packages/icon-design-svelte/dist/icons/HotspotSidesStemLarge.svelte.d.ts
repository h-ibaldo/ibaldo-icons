import { SvelteComponent } from 'svelte';

export interface HotspotSidesStemLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HotspotSidesStemLarge extends SvelteComponent<HotspotSidesStemLargeProps> {}
