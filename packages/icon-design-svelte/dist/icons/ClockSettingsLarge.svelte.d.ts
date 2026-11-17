import { SvelteComponent } from 'svelte';

export interface ClockSettingsLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSettingsLarge extends SvelteComponent<ClockSettingsLargeProps> {}
