import { SvelteComponent } from 'svelte';

export interface BackspaceRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BackspaceRound extends SvelteComponent<BackspaceRoundProps> {}
