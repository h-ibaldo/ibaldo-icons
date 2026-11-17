import { SvelteComponent } from 'svelte';

export interface StopwatchPlusDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPlusDetached extends SvelteComponent<StopwatchPlusDetachedProps> {}
