import { SvelteComponent } from 'svelte';

export interface StopwatchAlertBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchAlertBare extends SvelteComponent<StopwatchAlertBareProps> {}
