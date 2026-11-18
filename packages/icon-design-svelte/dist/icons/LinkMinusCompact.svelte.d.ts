import { SvelteComponent } from 'svelte';

export interface LinkMinusCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusCompact extends SvelteComponent<LinkMinusCompactProps> {}
