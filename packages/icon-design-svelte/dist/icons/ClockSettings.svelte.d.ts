import { SvelteComponent } from 'svelte';

export interface ClockSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSettings extends SvelteComponent<ClockSettingsProps> {}
