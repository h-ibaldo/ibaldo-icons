import { SvelteComponent } from 'svelte';

export interface Poll5HorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll5Horizontal extends SvelteComponent<Poll5HorizontalProps> {}
