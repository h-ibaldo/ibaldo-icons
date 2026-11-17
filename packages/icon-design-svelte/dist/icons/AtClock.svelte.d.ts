import { SvelteComponent } from 'svelte';

export interface AtClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtClock extends SvelteComponent<AtClockProps> {}
