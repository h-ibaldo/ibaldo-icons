import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseSettingsCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseSettingsCorner extends SvelteComponent<ArrowClockwiseSettingsCornerProps> {}
