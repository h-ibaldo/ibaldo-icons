import { SvelteComponent } from 'svelte';

export interface NodesForkLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesForkLarge extends SvelteComponent<NodesForkLargeProps> {}
