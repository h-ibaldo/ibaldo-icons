import { SvelteComponent } from 'svelte';

export interface StopwatchClockwiseBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchClockwiseBare extends SvelteComponent<StopwatchClockwiseBareProps> {}
