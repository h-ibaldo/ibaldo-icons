import { SvelteComponent } from 'svelte';

export interface DiagramTreeLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramTreeLarge extends SvelteComponent<DiagramTreeLargeProps> {}
