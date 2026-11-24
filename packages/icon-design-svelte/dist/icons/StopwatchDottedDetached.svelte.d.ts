import { SvelteComponent } from 'svelte';

export interface StopwatchDottedDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchDottedDetached extends SvelteComponent<StopwatchDottedDetachedProps> {}
