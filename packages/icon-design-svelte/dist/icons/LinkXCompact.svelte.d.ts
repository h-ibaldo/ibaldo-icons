import { SvelteComponent } from 'svelte';

export interface LinkXCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXCompact extends SvelteComponent<LinkXCompactProps> {}
