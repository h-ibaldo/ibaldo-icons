import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotMenuSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotMenuSettings extends SvelteComponent<LinkPersonalHotspotMenuSettingsProps> {}
