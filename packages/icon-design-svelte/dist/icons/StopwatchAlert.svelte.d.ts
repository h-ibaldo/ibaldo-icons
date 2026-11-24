import { SvelteComponent } from 'svelte';

export interface StopwatchAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchAlert extends SvelteComponent<StopwatchAlertProps> {}
