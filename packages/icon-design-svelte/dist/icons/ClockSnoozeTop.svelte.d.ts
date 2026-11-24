import { SvelteComponent } from 'svelte';

export interface ClockSnoozeTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSnoozeTop extends SvelteComponent<ClockSnoozeTopProps> {}
