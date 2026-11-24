import { SvelteComponent } from 'svelte';

export interface ClockTurnLeftSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockTurnLeftSmall extends SvelteComponent<ClockTurnLeftSmallProps> {}
