import { SvelteComponent } from 'svelte';

export interface ClockHourglassProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockHourglass extends SvelteComponent<ClockHourglassProps> {}
