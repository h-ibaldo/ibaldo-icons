import { SvelteComponent } from 'svelte';

export interface VoteChevronSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VoteChevronSquare extends SvelteComponent<VoteChevronSquareProps> {}
