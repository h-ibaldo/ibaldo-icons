import { SvelteComponent } from 'svelte';

export interface StopwatchOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchOff extends SvelteComponent<StopwatchOffProps> {}
