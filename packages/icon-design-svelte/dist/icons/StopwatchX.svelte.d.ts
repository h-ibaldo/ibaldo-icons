import { SvelteComponent } from 'svelte';

export interface StopwatchXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchX extends SvelteComponent<StopwatchXProps> {}
