import { SvelteComponent } from 'svelte';

export interface LinkBrokenBurstBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenBurstBar extends SvelteComponent<LinkBrokenBurstBarProps> {}
