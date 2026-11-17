import { SvelteComponent } from 'svelte';

export interface StopwatchPlusTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPlusTick extends SvelteComponent<StopwatchPlusTickProps> {}
