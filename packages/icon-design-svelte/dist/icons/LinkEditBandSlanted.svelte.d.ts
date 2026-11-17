import { SvelteComponent } from 'svelte';

export interface LinkEditBandSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditBandSlanted extends SvelteComponent<LinkEditBandSlantedProps> {}
