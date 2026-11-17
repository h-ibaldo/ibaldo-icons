import { SvelteComponent } from 'svelte';

export interface NodesCircleFourLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesCircleFourLarge extends SvelteComponent<NodesCircleFourLargeProps> {}
