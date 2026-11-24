import { SvelteComponent } from 'svelte';

export interface StopwatchPieProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPie extends SvelteComponent<StopwatchPieProps> {}
