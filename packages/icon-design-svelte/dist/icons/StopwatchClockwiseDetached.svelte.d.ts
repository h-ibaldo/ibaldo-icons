import { SvelteComponent } from 'svelte';

export interface StopwatchClockwiseDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchClockwiseDetached extends SvelteComponent<StopwatchClockwiseDetachedProps> {}
