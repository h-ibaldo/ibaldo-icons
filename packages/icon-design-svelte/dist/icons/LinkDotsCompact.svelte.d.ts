import { SvelteComponent } from 'svelte';

export interface LinkDotsCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsCompact extends SvelteComponent<LinkDotsCompactProps> {}
