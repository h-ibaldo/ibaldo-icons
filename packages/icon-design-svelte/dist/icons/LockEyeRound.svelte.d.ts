import { SvelteComponent } from 'svelte';

export interface LockEyeRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockEyeRound extends SvelteComponent<LockEyeRoundProps> {}
