import { SvelteComponent } from 'svelte';

export interface AppWindowClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppWindowClock extends SvelteComponent<AppWindowClockProps> {}
