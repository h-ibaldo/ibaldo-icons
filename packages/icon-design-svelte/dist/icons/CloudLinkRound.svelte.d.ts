import { SvelteComponent } from 'svelte';

export interface CloudLinkRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLinkRound extends SvelteComponent<CloudLinkRoundProps> {}
