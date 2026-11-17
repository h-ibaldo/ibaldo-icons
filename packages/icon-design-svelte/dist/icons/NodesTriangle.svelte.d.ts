import { SvelteComponent } from 'svelte';

export interface NodesTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesTriangle extends SvelteComponent<NodesTriangleProps> {}
