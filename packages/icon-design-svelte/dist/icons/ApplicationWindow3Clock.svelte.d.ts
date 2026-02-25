import { SvelteComponent } from 'svelte';

export interface ApplicationWindow3ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow3Clock extends SvelteComponent<ApplicationWindow3ClockProps> {}
