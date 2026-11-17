import { SvelteComponent } from 'svelte';

export interface StopwatchDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchDetached extends SvelteComponent<StopwatchDetachedProps> {}
