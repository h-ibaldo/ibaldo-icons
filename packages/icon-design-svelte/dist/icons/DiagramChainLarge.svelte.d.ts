import { SvelteComponent } from 'svelte';

export interface DiagramChainLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramChainLarge extends SvelteComponent<DiagramChainLargeProps> {}
