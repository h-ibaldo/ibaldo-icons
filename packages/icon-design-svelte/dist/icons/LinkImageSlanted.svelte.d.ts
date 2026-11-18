import { SvelteComponent } from 'svelte';

export interface LinkImageSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkImageSlanted extends SvelteComponent<LinkImageSlantedProps> {}
