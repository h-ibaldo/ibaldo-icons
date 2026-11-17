import { SvelteComponent } from 'svelte';

export interface HotspotSidesStemProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HotspotSidesStem extends SvelteComponent<HotspotSidesStemProps> {}
