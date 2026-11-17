import { SvelteComponent } from 'svelte';

export interface HotspotStemLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HotspotStemLarge extends SvelteComponent<HotspotStemLargeProps> {}
