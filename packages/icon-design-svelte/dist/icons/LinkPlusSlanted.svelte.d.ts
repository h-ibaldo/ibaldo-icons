import { SvelteComponent } from 'svelte';

export interface LinkPlusSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusSlanted extends SvelteComponent<LinkPlusSlantedProps> {}
