import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotX extends SvelteComponent<LinkPersonalHotspotXProps> {}
