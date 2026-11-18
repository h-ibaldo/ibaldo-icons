import { SvelteComponent } from 'svelte';

export interface LinkCircleXShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleXShort extends SvelteComponent<LinkCircleXShortProps> {}
