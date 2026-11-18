import { SvelteComponent } from 'svelte';

export interface LinkCircleShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleShort extends SvelteComponent<LinkCircleShortProps> {}
