import { SvelteComponent } from 'svelte';

export interface StopwatchPinTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPinTick extends SvelteComponent<StopwatchPinTickProps> {}
