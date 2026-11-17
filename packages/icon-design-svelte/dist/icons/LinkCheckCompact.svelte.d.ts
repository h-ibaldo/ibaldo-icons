import { SvelteComponent } from 'svelte';

export interface LinkCheckCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckCompact extends SvelteComponent<LinkCheckCompactProps> {}
