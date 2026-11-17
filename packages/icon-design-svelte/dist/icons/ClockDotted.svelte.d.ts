import { SvelteComponent } from 'svelte';

export interface ClockDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDotted extends SvelteComponent<ClockDottedProps> {}
