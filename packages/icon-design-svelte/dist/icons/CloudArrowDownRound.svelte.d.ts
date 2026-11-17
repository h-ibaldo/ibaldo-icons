import { SvelteComponent } from 'svelte';

export interface CloudArrowDownRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowDownRound extends SvelteComponent<CloudArrowDownRoundProps> {}
