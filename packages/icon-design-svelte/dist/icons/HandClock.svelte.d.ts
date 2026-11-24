import { SvelteComponent } from 'svelte';

export interface HandClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandClock extends SvelteComponent<HandClockProps> {}
