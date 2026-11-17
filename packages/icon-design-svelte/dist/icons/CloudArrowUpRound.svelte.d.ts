import { SvelteComponent } from 'svelte';

export interface CloudArrowUpRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowUpRound extends SvelteComponent<CloudArrowUpRoundProps> {}
