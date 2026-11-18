import { SvelteComponent } from 'svelte';

export interface LinkDotsFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsFlat extends SvelteComponent<LinkDotsFlatProps> {}
