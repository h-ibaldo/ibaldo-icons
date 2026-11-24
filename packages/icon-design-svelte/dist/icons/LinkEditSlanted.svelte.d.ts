import { SvelteComponent } from 'svelte';

export interface LinkEditSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditSlanted extends SvelteComponent<LinkEditSlantedProps> {}
