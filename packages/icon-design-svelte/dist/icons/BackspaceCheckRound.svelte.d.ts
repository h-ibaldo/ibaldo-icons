import { SvelteComponent } from 'svelte';

export interface BackspaceCheckRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BackspaceCheckRound extends SvelteComponent<BackspaceCheckRoundProps> {}
