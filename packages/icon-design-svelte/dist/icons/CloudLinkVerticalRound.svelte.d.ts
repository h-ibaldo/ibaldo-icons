import { SvelteComponent } from 'svelte';

export interface CloudLinkVerticalRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLinkVerticalRound extends SvelteComponent<CloudLinkVerticalRoundProps> {}
