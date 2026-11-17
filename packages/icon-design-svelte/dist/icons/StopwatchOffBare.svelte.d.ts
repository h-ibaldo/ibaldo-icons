import { SvelteComponent } from 'svelte';

export interface StopwatchOffBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchOffBare extends SvelteComponent<StopwatchOffBareProps> {}
