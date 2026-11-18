import { SvelteComponent } from 'svelte';

export interface LinkCheckFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckFlat extends SvelteComponent<LinkCheckFlatProps> {}
