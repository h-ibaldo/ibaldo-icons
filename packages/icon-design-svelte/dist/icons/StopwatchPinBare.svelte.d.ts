import { SvelteComponent } from 'svelte';

export interface StopwatchPinBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPinBare extends SvelteComponent<StopwatchPinBareProps> {}
