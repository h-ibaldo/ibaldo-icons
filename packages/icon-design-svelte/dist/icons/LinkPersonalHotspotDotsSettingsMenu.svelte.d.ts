import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotDotsSettingsMenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotDotsSettingsMenu extends SvelteComponent<LinkPersonalHotspotDotsSettingsMenuProps> {}
