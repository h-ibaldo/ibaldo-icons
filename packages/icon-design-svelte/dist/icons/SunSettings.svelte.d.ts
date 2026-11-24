import { SvelteComponent } from 'svelte';

export interface SunSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunSettings extends SvelteComponent<SunSettingsProps> {}
