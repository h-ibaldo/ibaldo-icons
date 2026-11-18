import { SvelteComponent } from 'svelte';

export interface StopwatchOffDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchOffDetached extends SvelteComponent<StopwatchOffDetachedProps> {}
