import { SvelteComponent } from 'svelte';

export interface LinkBrokenDoubleBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenDoubleBar extends SvelteComponent<LinkBrokenDoubleBarProps> {}
