import { SvelteComponent } from 'svelte';

export interface StopwatchTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchTick extends SvelteComponent<StopwatchTickProps> {}
