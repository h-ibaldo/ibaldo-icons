import { SvelteComponent } from 'svelte';

export interface ClockFastProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockFast extends SvelteComponent<ClockFastProps> {}
