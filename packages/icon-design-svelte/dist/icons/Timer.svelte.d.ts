import { SvelteComponent } from 'svelte';

export interface TimerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Timer extends SvelteComponent<TimerProps> {}
