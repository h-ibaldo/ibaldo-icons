import { SvelteComponent } from 'svelte';

export interface StopwatchSnoozeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchSnooze extends SvelteComponent<StopwatchSnoozeProps> {}
