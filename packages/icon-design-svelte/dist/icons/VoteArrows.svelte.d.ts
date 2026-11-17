import { SvelteComponent } from 'svelte';

export interface VoteArrowsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VoteArrows extends SvelteComponent<VoteArrowsProps> {}
