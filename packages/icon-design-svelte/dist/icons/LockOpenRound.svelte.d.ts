import { SvelteComponent } from 'svelte';

export interface LockOpenRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenRound extends SvelteComponent<LockOpenRoundProps> {}
