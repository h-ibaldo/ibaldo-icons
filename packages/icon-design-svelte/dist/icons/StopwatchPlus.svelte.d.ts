import { SvelteComponent } from 'svelte';

export interface StopwatchPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPlus extends SvelteComponent<StopwatchPlusProps> {}
