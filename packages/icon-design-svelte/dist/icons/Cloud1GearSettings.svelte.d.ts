import { SvelteComponent } from 'svelte';

export interface Cloud1GearSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1GearSettings extends SvelteComponent<Cloud1GearSettingsProps> {}
