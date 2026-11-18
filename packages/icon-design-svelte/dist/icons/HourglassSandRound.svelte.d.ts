import { SvelteComponent } from 'svelte';

export interface HourglassSandRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSandRound extends SvelteComponent<HourglassSandRoundProps> {}
