import { SvelteComponent } from 'svelte';

export interface ApplicationWindowClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowClock extends SvelteComponent<ApplicationWindowClockProps> {}
