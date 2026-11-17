import { SvelteComponent } from 'svelte';

export interface HandSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSettings extends SvelteComponent<HandSettingsProps> {}
