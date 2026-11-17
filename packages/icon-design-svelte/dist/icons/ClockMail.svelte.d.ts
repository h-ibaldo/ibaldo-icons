import { SvelteComponent } from 'svelte';

export interface ClockMailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockMail extends SvelteComponent<ClockMailProps> {}
