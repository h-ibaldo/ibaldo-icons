import { SvelteComponent } from 'svelte';

export interface ClockPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockPlus extends SvelteComponent<ClockPlusProps> {}
