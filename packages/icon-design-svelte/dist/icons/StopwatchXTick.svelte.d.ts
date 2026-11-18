import { SvelteComponent } from 'svelte';

export interface StopwatchXTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchXTick extends SvelteComponent<StopwatchXTickProps> {}
