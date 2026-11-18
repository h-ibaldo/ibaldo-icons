import { SvelteComponent } from 'svelte';

export interface LinkDotsSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsSlanted extends SvelteComponent<LinkDotsSlantedProps> {}
