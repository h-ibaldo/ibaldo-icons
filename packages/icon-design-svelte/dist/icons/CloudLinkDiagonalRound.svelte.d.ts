import { SvelteComponent } from 'svelte';

export interface CloudLinkDiagonalRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLinkDiagonalRound extends SvelteComponent<CloudLinkDiagonalRoundProps> {}
