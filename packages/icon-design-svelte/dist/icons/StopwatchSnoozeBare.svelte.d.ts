import { SvelteComponent } from 'svelte';

export interface StopwatchSnoozeBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchSnoozeBare extends SvelteComponent<StopwatchSnoozeBareProps> {}
