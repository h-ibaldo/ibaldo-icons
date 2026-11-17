import { SvelteComponent } from 'svelte';

export interface NodesForkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesFork extends SvelteComponent<NodesForkProps> {}
