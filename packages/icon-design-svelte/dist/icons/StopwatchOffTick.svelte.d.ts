import { SvelteComponent } from 'svelte';

export interface StopwatchOffTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchOffTick extends SvelteComponent<StopwatchOffTickProps> {}
