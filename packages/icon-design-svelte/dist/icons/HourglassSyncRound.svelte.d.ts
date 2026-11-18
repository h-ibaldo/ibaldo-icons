import { SvelteComponent } from 'svelte';

export interface HourglassSyncRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSyncRound extends SvelteComponent<HourglassSyncRoundProps> {}
