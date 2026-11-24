import { SvelteComponent } from 'svelte';

export interface LinkXFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXFlat extends SvelteComponent<LinkXFlatProps> {}
