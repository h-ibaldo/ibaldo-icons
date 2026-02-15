import { SvelteComponent } from 'svelte';

export interface ClockDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDots extends SvelteComponent<ClockDotsProps> {}
