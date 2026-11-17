import { SvelteComponent } from 'svelte';

export interface WarningSquareStackAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningSquareStackAlt extends SvelteComponent<WarningSquareStackAltProps> {}
