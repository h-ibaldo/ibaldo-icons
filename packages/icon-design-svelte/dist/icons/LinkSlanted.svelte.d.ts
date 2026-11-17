import { SvelteComponent } from 'svelte';

export interface LinkSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSlanted extends SvelteComponent<LinkSlantedProps> {}
