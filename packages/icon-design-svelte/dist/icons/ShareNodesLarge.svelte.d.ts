import { SvelteComponent } from 'svelte';

export interface ShareNodesLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShareNodesLarge extends SvelteComponent<ShareNodesLargeProps> {}
