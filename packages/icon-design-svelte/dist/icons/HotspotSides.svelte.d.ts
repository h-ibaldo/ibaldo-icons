import { SvelteComponent } from 'svelte';

export interface HotspotSidesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HotspotSides extends SvelteComponent<HotspotSidesProps> {}
