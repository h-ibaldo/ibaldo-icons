import { SvelteComponent } from 'svelte';

export interface LockCheckRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockCheckRound extends SvelteComponent<LockCheckRoundProps> {}
