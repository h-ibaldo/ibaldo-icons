import { SvelteComponent } from 'svelte';

export interface LockXRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockXRound extends SvelteComponent<LockXRoundProps> {}
