import { SvelteComponent } from 'svelte';

export interface LinkPlusCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusCircleRound extends SvelteComponent<LinkPlusCircleRoundProps> {}
