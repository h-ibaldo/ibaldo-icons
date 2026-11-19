import { SvelteComponent } from 'svelte';

export interface LinkBrokenDoubleBracketLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenDoubleBracketLarge extends SvelteComponent<LinkBrokenDoubleBracketLargeProps> {}
