import { SvelteComponent } from 'svelte';

export interface CloudXCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudXCornerRound extends SvelteComponent<CloudXCornerRoundProps> {}
