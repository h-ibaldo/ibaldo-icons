import { SvelteComponent } from 'svelte';

export interface HourglassSquareRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSquareRound extends SvelteComponent<HourglassSquareRoundProps> {}
