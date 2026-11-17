import { SvelteComponent } from 'svelte';

export interface LinkMenuRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuRound extends SvelteComponent<LinkMenuRoundProps> {}
