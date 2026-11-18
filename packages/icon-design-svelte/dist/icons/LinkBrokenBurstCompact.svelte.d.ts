import { SvelteComponent } from 'svelte';

export interface LinkBrokenBurstCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenBurstCompact extends SvelteComponent<LinkBrokenBurstCompactProps> {}
