import { SvelteComponent } from 'svelte';

export interface LinkPlusBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusBar extends SvelteComponent<LinkPlusBarProps> {}
