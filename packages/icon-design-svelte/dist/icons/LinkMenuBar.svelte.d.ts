import { SvelteComponent } from 'svelte';

export interface LinkMenuBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuBar extends SvelteComponent<LinkMenuBarProps> {}
