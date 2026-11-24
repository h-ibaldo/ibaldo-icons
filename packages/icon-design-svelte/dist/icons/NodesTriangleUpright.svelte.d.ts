import { SvelteComponent } from 'svelte';

export interface NodesTriangleUprightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesTriangleUpright extends SvelteComponent<NodesTriangleUprightProps> {}
