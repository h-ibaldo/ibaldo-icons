import { SvelteComponent } from 'svelte';

export interface VoteTrianglesRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VoteTrianglesRound extends SvelteComponent<VoteTrianglesRoundProps> {}
