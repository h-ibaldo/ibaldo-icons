import { SvelteComponent } from 'svelte';

export interface HourglassCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassCircleRound extends SvelteComponent<HourglassCircleRoundProps> {}
