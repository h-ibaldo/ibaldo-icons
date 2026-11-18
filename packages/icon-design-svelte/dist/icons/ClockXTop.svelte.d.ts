import { SvelteComponent } from 'svelte';

export interface ClockXTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockXTop extends SvelteComponent<ClockXTopProps> {}
