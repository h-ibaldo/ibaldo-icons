import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1Clock extends SvelteComponent<ApplicationWindow1ClockProps> {}
