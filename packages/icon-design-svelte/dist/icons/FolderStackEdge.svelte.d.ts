import { SvelteComponent } from 'svelte';

export interface FolderStackEdgeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderStackEdge extends SvelteComponent<FolderStackEdgeProps> {}
