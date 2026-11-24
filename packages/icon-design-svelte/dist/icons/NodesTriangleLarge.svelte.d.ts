import { SvelteComponent } from 'svelte';

export interface NodesTriangleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesTriangleLarge extends SvelteComponent<NodesTriangleLargeProps> {}
