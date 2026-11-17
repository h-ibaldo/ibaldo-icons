import { SvelteComponent } from 'svelte';

export interface LinkPlusCircleBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusCircleBar extends SvelteComponent<LinkPlusCircleBarProps> {}
