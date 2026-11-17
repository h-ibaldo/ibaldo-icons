import { SvelteComponent } from 'svelte';

export interface LockOpenKeyholeRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenKeyholeRound extends SvelteComponent<LockOpenKeyholeRoundProps> {}
