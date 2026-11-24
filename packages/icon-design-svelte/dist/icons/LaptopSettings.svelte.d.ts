import { SvelteComponent } from 'svelte';

export interface LaptopSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopSettings extends SvelteComponent<LaptopSettingsProps> {}
