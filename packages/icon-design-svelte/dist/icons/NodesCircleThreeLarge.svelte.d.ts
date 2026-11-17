import { SvelteComponent } from 'svelte';

export interface NodesCircleThreeLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesCircleThreeLarge extends SvelteComponent<NodesCircleThreeLargeProps> {}
