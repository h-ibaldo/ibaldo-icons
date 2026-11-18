import { SvelteComponent } from 'svelte';

export interface LinkMenuFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuFlat extends SvelteComponent<LinkMenuFlatProps> {}
