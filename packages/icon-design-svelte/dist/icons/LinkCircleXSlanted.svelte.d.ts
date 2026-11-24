import { SvelteComponent } from 'svelte';

export interface LinkCircleXSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleXSlanted extends SvelteComponent<LinkCircleXSlantedProps> {}
