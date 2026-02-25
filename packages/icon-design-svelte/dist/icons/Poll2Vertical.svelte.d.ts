import { SvelteComponent } from 'svelte';

export interface Poll2VerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll2Vertical extends SvelteComponent<Poll2VerticalProps> {}
