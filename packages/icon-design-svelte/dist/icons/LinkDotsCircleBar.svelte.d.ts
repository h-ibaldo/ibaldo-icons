import { SvelteComponent } from 'svelte';

export interface LinkDotsCircleBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsCircleBar extends SvelteComponent<LinkDotsCircleBarProps> {}
