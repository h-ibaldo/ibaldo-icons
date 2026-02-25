import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotCheckCheckedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotCheckChecked extends SvelteComponent<LinkPersonalHotspotCheckCheckedProps> {}
