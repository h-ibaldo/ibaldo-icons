import { SvelteComponent } from 'svelte';

export interface ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Clock extends SvelteComponent<ClockProps> {}
