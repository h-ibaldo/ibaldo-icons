import { SvelteComponent } from 'svelte';

export interface StopwatchCheckDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchCheckDetached extends SvelteComponent<StopwatchCheckDetachedProps> {}
