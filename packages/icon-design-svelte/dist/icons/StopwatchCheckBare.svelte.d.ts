import { SvelteComponent } from 'svelte';

export interface StopwatchCheckBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchCheckBare extends SvelteComponent<StopwatchCheckBareProps> {}
