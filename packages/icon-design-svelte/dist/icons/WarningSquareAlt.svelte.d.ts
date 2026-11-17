import { SvelteComponent } from 'svelte';

export interface WarningSquareAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningSquareAlt extends SvelteComponent<WarningSquareAltProps> {}
