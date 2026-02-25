import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspot extends SvelteComponent<LinkPersonalHotspotProps> {}
