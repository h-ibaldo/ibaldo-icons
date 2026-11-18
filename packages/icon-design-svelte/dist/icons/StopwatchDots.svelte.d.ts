import { SvelteComponent } from 'svelte';

export interface StopwatchDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchDots extends SvelteComponent<StopwatchDotsProps> {}
