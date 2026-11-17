import { SvelteComponent } from 'svelte';

export interface LinkEditBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditBar extends SvelteComponent<LinkEditBarProps> {}
