import { SvelteComponent } from 'svelte';

export interface NodesHubProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesHub extends SvelteComponent<NodesHubProps> {}
