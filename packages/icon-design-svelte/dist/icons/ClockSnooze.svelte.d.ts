import { SvelteComponent } from 'svelte';

export interface ClockSnoozeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSnooze extends SvelteComponent<ClockSnoozeProps> {}
