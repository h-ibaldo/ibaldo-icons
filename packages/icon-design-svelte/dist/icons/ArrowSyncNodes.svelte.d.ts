import { SvelteComponent } from 'svelte';

export interface ArrowSyncNodesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncNodes extends SvelteComponent<ArrowSyncNodesProps> {}
