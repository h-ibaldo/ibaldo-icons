import { SvelteComponent } from 'svelte';

export interface StopwatchDottedBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchDottedBare extends SvelteComponent<StopwatchDottedBareProps> {}
