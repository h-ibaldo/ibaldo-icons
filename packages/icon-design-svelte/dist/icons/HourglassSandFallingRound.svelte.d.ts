import { SvelteComponent } from 'svelte';

export interface HourglassSandFallingRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSandFallingRound extends SvelteComponent<HourglassSandFallingRoundProps> {}
