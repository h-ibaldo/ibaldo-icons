import { SvelteComponent } from 'svelte';

export interface LinkPersonalHotspotSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPersonalHotspotSettings extends SvelteComponent<LinkPersonalHotspotSettingsProps> {}
