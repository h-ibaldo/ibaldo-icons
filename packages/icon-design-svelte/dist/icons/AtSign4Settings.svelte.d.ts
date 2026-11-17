import { SvelteComponent } from 'svelte';

export interface AtSign4SettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4Settings extends SvelteComponent<AtSign4SettingsProps> {}
