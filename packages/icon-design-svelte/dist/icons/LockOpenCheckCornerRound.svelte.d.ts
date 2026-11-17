import { SvelteComponent } from 'svelte';

export interface LockOpenCheckCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenCheckCornerRound extends SvelteComponent<LockOpenCheckCornerRoundProps> {}
