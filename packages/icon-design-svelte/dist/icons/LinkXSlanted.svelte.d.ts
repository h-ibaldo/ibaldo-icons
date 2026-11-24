import { SvelteComponent } from 'svelte';

export interface LinkXSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXSlanted extends SvelteComponent<LinkXSlantedProps> {}
