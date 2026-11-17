import { SvelteComponent } from 'svelte';

export interface NodesZigzagLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesZigzagLarge extends SvelteComponent<NodesZigzagLargeProps> {}
