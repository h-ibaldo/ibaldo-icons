import { SvelteComponent } from 'svelte';

export interface CloudArrowUpDownRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowUpDownRound extends SvelteComponent<CloudArrowUpDownRoundProps> {}
