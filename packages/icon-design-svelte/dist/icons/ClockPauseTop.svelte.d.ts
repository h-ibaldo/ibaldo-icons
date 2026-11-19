import { SvelteComponent } from 'svelte';

export interface ClockPauseTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockPauseTop extends SvelteComponent<ClockPauseTopProps> {}
