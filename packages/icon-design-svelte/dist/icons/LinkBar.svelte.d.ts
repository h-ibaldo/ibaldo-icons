import { SvelteComponent } from 'svelte';

export interface LinkBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBar extends SvelteComponent<LinkBarProps> {}
