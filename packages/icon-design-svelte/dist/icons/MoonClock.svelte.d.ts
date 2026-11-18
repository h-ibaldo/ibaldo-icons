import { SvelteComponent } from 'svelte';

export interface MoonClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonClock extends SvelteComponent<MoonClockProps> {}
