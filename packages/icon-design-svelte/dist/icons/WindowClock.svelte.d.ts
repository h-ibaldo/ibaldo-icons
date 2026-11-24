import { SvelteComponent } from 'svelte';

export interface WindowClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowClock extends SvelteComponent<WindowClockProps> {}
