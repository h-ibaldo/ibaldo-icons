import { SvelteComponent } from 'svelte';

export interface TabSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabSettings extends SvelteComponent<TabSettingsProps> {}
