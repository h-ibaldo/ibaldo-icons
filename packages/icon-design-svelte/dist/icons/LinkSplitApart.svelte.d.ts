import { SvelteComponent } from 'svelte';

export interface LinkSplitApartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSplitApart extends SvelteComponent<LinkSplitApartProps> {}
