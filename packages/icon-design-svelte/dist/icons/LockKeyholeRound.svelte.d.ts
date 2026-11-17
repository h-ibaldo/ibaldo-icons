import { SvelteComponent } from 'svelte';

export interface LockKeyholeRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockKeyholeRound extends SvelteComponent<LockKeyholeRoundProps> {}
