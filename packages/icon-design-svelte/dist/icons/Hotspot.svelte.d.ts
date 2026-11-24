import { SvelteComponent } from 'svelte';

export interface HotspotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Hotspot extends SvelteComponent<HotspotProps> {}
