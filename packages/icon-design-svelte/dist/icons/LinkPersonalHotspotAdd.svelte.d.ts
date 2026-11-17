import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotAddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotAdd extends SvelteComponent<LinkPersonalHotspotAddProps> {}
