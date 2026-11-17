import { SvelteComponent } from 'svelte';

export interface SunBrightnessSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightnessSettings extends SvelteComponent<SunBrightnessSettingsProps> {}
