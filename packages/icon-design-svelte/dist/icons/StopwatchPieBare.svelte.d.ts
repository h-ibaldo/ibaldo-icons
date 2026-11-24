import { SvelteComponent } from 'svelte';

export interface StopwatchPieBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPieBare extends SvelteComponent<StopwatchPieBareProps> {}
