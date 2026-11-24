import { SvelteComponent } from 'svelte';

export interface LinkDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDots extends SvelteComponent<LinkDotsProps> {}
