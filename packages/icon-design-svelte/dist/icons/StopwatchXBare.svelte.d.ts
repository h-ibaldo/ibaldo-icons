import { SvelteComponent } from 'svelte';

export interface StopwatchXBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchXBare extends SvelteComponent<StopwatchXBareProps> {}
