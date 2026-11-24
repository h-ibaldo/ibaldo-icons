import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseSettings extends SvelteComponent<ArrowClockwiseSettingsProps> {}
