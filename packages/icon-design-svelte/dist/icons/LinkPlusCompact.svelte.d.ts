import { SvelteComponent } from 'svelte';

export interface LinkPlusCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusCompact extends SvelteComponent<LinkPlusCompactProps> {}
