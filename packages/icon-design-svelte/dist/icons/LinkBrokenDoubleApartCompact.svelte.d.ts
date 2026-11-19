import { SvelteComponent } from 'svelte';

export interface LinkBrokenDoubleApartCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenDoubleApartCompact extends SvelteComponent<LinkBrokenDoubleApartCompactProps> {}
