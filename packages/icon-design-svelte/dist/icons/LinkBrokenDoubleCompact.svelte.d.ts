import { SvelteComponent } from 'svelte';

export interface LinkBrokenDoubleCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenDoubleCompact extends SvelteComponent<LinkBrokenDoubleCompactProps> {}
