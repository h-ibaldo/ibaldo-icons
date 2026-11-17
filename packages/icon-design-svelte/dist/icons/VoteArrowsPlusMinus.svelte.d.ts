import { SvelteComponent } from 'svelte';

export interface VoteArrowsPlusMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VoteArrowsPlusMinus extends SvelteComponent<VoteArrowsPlusMinusProps> {}
