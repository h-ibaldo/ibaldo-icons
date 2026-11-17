import { SvelteComponent } from 'svelte';

export interface DiagramChainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramChain extends SvelteComponent<DiagramChainProps> {}
