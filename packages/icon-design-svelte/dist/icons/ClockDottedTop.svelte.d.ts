import { SvelteComponent } from 'svelte';

export interface ClockDottedTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDottedTop extends SvelteComponent<ClockDottedTopProps> {}
