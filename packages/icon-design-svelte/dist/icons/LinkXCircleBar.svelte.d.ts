import { SvelteComponent } from 'svelte';

export interface LinkXCircleBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXCircleBar extends SvelteComponent<LinkXCircleBarProps> {}
