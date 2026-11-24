import { SvelteComponent } from 'svelte';

export interface StopwatchCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchCheck extends SvelteComponent<StopwatchCheckProps> {}
