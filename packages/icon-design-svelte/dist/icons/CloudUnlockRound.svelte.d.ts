import { SvelteComponent } from 'svelte';

export interface CloudUnlockRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUnlockRound extends SvelteComponent<CloudUnlockRoundProps> {}
