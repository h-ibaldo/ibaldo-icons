import { SvelteComponent } from 'svelte';

export interface StopwatchMinusDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchMinusDetached extends SvelteComponent<StopwatchMinusDetachedProps> {}
