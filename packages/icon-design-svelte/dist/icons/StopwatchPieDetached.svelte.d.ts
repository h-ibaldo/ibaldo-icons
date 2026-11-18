import { SvelteComponent } from 'svelte';

export interface StopwatchPieDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPieDetached extends SvelteComponent<StopwatchPieDetachedProps> {}
