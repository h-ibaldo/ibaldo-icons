import { SvelteComponent } from 'svelte';

export interface StopwatchAlertDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchAlertDetached extends SvelteComponent<StopwatchAlertDetachedProps> {}
