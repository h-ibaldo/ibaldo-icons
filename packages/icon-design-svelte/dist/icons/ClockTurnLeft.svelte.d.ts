import { SvelteComponent } from 'svelte';

export interface ClockTurnLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockTurnLeft extends SvelteComponent<ClockTurnLeftProps> {}
