import { SvelteComponent } from 'svelte';

export interface SunBrightness1GearSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness1GearSettings extends SvelteComponent<SunBrightness1GearSettingsProps> {}
