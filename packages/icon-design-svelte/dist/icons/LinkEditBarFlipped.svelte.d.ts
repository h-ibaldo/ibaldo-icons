import { SvelteComponent } from 'svelte';

export interface LinkEditBarFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditBarFlipped extends SvelteComponent<LinkEditBarFlippedProps> {}
