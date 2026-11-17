import { SvelteComponent } from 'svelte';

export interface HotspotStemProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HotspotStem extends SvelteComponent<HotspotStemProps> {}
