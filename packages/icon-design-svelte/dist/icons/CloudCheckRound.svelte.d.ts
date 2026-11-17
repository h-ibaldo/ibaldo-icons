import { SvelteComponent } from 'svelte';

export interface CloudCheckRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudCheckRound extends SvelteComponent<CloudCheckRoundProps> {}
