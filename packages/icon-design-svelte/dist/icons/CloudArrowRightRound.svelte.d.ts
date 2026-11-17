import { SvelteComponent } from 'svelte';

export interface CloudArrowRightRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowRightRound extends SvelteComponent<CloudArrowRightRoundProps> {}
