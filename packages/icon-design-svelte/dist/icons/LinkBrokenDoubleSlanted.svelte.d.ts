import { SvelteComponent } from 'svelte';

export interface LinkBrokenDoubleSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenDoubleSlanted extends SvelteComponent<LinkBrokenDoubleSlantedProps> {}
