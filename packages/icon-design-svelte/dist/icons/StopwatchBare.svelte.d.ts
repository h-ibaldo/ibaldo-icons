import { SvelteComponent } from 'svelte';

export interface StopwatchBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchBare extends SvelteComponent<StopwatchBareProps> {}
