import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotRemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotRemove extends SvelteComponent<LinkPersonalHotspotRemoveProps> {}
