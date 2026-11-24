import { SvelteComponent } from 'svelte';

export interface StethoscopeRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StethoscopeRound extends SvelteComponent<StethoscopeRoundProps> {}
