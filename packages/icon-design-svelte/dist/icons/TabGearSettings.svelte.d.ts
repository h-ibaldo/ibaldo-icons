import { SvelteComponent } from 'svelte';

export interface TabGearSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabGearSettings extends SvelteComponent<TabGearSettingsProps> {}
