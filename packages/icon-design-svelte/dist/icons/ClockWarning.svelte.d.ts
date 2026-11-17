import { SvelteComponent } from 'svelte';

export interface ClockWarningProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockWarning extends SvelteComponent<ClockWarningProps> {}
