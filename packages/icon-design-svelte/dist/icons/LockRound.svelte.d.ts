import { SvelteComponent } from 'svelte';

export interface LockRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockRound extends SvelteComponent<LockRoundProps> {}
