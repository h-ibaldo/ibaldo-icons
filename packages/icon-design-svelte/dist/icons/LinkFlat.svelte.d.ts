import { SvelteComponent } from 'svelte';

export interface LinkFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkFlat extends SvelteComponent<LinkFlatProps> {}
