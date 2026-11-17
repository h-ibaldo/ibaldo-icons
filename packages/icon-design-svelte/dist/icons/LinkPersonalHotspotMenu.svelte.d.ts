import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotMenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotMenu extends SvelteComponent<LinkPersonalHotspotMenuProps> {}
