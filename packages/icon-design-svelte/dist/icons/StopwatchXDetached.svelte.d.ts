import { SvelteComponent } from 'svelte';

export interface StopwatchXDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchXDetached extends SvelteComponent<StopwatchXDetachedProps> {}
