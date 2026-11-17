import { SvelteComponent } from 'svelte';

export interface ClockWarningAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockWarningAlt extends SvelteComponent<ClockWarningAltProps> {}
