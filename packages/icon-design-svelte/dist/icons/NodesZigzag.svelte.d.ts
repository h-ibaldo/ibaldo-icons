import { SvelteComponent } from 'svelte';

export interface NodesZigzagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesZigzag extends SvelteComponent<NodesZigzagProps> {}
