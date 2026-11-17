import { SvelteComponent } from 'svelte';

export interface SynchSettingsArrowsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SynchSettingsArrows extends SvelteComponent<SynchSettingsArrowsProps> {}
