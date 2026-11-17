import { SvelteComponent } from 'svelte';

export interface VoteThumbsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VoteThumbs extends SvelteComponent<VoteThumbsProps> {}
