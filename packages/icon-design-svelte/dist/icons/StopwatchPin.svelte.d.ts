import { SvelteComponent } from 'svelte';

export interface StopwatchPinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPin extends SvelteComponent<StopwatchPinProps> {}
