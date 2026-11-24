import { SvelteComponent } from 'svelte';

export interface LinkEditBandBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditBandBar extends SvelteComponent<LinkEditBandBarProps> {}
