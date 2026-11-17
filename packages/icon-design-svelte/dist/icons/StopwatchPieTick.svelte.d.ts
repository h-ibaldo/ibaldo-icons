import { SvelteComponent } from 'svelte';

export interface StopwatchPieTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPieTick extends SvelteComponent<StopwatchPieTickProps> {}
