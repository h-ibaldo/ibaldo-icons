import { SvelteComponent } from 'svelte';

export interface UpvoteButtonsChevronArrowUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UpvoteButtonsChevronArrowUpDown extends SvelteComponent<UpvoteButtonsChevronArrowUpDownProps> {}
