import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotBroken extends SvelteComponent<LinkPersonalHotspotBrokenProps> {}
