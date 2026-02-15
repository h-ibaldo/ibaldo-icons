import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotAddPlus extends SvelteComponent<LinkPersonalHotspotAddPlusProps> {}
