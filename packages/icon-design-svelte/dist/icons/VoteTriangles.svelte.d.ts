import { SvelteComponent } from 'svelte';

export interface VoteTrianglesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VoteTriangles extends SvelteComponent<VoteTrianglesProps> {}
