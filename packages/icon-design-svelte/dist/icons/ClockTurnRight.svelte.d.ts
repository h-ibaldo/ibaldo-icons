import { SvelteComponent } from 'svelte';

export interface ClockTurnRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockTurnRight extends SvelteComponent<ClockTurnRightProps> {}
