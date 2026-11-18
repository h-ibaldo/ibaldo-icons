import { SvelteComponent } from 'svelte';

export interface LinkMenuCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuCompact extends SvelteComponent<LinkMenuCompactProps> {}
