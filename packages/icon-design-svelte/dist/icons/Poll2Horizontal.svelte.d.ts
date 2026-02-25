import { SvelteComponent } from 'svelte';

export interface Poll2HorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll2Horizontal extends SvelteComponent<Poll2HorizontalProps> {}
