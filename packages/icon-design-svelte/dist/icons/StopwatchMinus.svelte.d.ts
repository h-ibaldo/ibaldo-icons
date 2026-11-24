import { SvelteComponent } from 'svelte';

export interface StopwatchMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchMinus extends SvelteComponent<StopwatchMinusProps> {}
