import { SvelteComponent } from 'svelte';

export interface ClockPinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockPin extends SvelteComponent<ClockPinProps> {}
