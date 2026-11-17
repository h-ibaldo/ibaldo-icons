import { SvelteComponent } from 'svelte';

export interface BellClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellClock extends SvelteComponent<BellClockProps> {}
