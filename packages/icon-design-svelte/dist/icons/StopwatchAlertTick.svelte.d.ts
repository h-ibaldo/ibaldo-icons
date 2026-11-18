import { SvelteComponent } from 'svelte';

export interface StopwatchAlertTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchAlertTick extends SvelteComponent<StopwatchAlertTickProps> {}
