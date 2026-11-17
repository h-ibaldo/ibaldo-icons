import { SvelteComponent } from 'svelte';

export interface ClockDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDot extends SvelteComponent<ClockDotProps> {}
