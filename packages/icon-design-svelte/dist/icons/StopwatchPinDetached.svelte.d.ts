import { SvelteComponent } from 'svelte';

export interface StopwatchPinDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPinDetached extends SvelteComponent<StopwatchPinDetachedProps> {}
