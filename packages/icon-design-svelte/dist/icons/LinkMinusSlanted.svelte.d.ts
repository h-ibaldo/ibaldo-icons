import { SvelteComponent } from 'svelte';

export interface LinkMinusSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusSlanted extends SvelteComponent<LinkMinusSlantedProps> {}
