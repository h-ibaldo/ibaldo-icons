import { SvelteComponent } from 'svelte';

export interface NodesCircleFourProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NodesCircleFour extends SvelteComponent<NodesCircleFourProps> {}
