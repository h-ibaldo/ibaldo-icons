import { SvelteComponent } from 'svelte';

export interface LockCheckCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockCheckCornerRound extends SvelteComponent<LockCheckCornerRoundProps> {}
