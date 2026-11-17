import { SvelteComponent } from 'svelte';

export interface CloudLockRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLockRound extends SvelteComponent<CloudLockRoundProps> {}
