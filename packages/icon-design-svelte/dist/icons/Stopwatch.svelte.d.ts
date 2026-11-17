import { SvelteComponent } from 'svelte';

export interface StopwatchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Stopwatch extends SvelteComponent<StopwatchProps> {}
