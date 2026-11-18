import { SvelteComponent } from 'svelte';

export interface LinkCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCompact extends SvelteComponent<LinkCompactProps> {}
