import { SvelteComponent } from 'svelte';

export interface ClockTurnRightSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockTurnRightSmall extends SvelteComponent<ClockTurnRightSmallProps> {}
