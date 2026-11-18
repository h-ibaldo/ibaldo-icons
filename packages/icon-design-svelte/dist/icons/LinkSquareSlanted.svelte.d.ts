import { SvelteComponent } from 'svelte';

export interface LinkSquareSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSquareSlanted extends SvelteComponent<LinkSquareSlantedProps> {}
