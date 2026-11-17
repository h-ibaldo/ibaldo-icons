import { SvelteComponent } from 'svelte';

export interface UpvoteArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UpvoteArrowDown extends SvelteComponent<UpvoteArrowDownProps> {}
