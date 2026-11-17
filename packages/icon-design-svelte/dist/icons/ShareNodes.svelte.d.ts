import { SvelteComponent } from 'svelte';

export interface ShareNodesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShareNodes extends SvelteComponent<ShareNodesProps> {}
