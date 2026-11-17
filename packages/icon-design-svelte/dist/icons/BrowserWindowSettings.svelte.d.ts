import { SvelteComponent } from 'svelte';

export interface BrowserWindowSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowSettings extends SvelteComponent<BrowserWindowSettingsProps> {}
