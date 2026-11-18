import { SvelteComponent } from 'svelte';

export interface LinkCheckSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckSlanted extends SvelteComponent<LinkCheckSlantedProps> {}
