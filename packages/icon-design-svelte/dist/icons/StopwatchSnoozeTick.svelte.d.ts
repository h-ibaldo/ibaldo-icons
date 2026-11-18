import { SvelteComponent } from 'svelte';

export interface StopwatchSnoozeTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchSnoozeTick extends SvelteComponent<StopwatchSnoozeTickProps> {}
