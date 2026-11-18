import { SvelteComponent } from 'svelte';

export interface LinkArrowUpFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkArrowUpFlat extends SvelteComponent<LinkArrowUpFlatProps> {}
