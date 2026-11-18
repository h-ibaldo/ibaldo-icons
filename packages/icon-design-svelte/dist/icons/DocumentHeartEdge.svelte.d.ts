import { SvelteComponent } from 'svelte';

export interface DocumentHeartEdgeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentHeartEdge extends SvelteComponent<DocumentHeartEdgeProps> {}
