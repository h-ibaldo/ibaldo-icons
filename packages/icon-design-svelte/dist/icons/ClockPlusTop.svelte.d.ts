import { SvelteComponent } from 'svelte';

export interface ClockPlusTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockPlusTop extends SvelteComponent<ClockPlusTopProps> {}
