import { SvelteComponent } from 'svelte';

export interface StopwatchMinusTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchMinusTick extends SvelteComponent<StopwatchMinusTickProps> {}
