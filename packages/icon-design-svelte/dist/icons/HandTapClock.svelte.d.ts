import { SvelteComponent } from 'svelte';

export interface HandTapClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTapClock extends SvelteComponent<HandTapClockProps> {}
