import { SvelteComponent } from 'svelte';

export interface UpvoteButtonsChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UpvoteButtonsChevron extends SvelteComponent<UpvoteButtonsChevronProps> {}
