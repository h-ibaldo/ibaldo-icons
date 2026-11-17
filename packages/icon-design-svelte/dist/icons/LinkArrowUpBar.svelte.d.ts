import { SvelteComponent } from 'svelte';

export interface LinkArrowUpBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkArrowUpBar extends SvelteComponent<LinkArrowUpBarProps> {}
