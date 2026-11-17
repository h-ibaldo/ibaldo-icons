import { SvelteComponent } from 'svelte';

export interface StopwatchFastTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchFastTick extends SvelteComponent<StopwatchFastTickProps> {}
