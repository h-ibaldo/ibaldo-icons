import { SvelteComponent } from 'svelte';

export interface WifiSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSettings extends SvelteComponent<WifiSettingsProps> {}
