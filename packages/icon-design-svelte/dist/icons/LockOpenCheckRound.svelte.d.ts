import { SvelteComponent } from 'svelte';

export interface LockOpenCheckRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenCheckRound extends SvelteComponent<LockOpenCheckRoundProps> {}
