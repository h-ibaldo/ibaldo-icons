import { SvelteComponent } from 'svelte';

export interface Tab1GearSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab1GearSettings extends SvelteComponent<Tab1GearSettingsProps> {}
