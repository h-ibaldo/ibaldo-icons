import { SvelteComponent } from 'svelte';

export interface LinkArrowUpSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkArrowUpSlanted extends SvelteComponent<LinkArrowUpSlantedProps> {}
