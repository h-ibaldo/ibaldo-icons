import { SvelteComponent } from 'svelte';

export interface LinkBrokenFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenFlat extends SvelteComponent<LinkBrokenFlatProps> {}
