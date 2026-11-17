import { SvelteComponent } from 'svelte';

export interface LinkMenuSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuSlanted extends SvelteComponent<LinkMenuSlantedProps> {}
