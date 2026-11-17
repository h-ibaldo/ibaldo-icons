import { SvelteComponent } from 'svelte';

export interface GearSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSettings extends SvelteComponent<GearSettingsProps> {}
