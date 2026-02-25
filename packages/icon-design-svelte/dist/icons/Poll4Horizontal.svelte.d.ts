import { SvelteComponent } from 'svelte';

export interface Poll4HorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll4Horizontal extends SvelteComponent<Poll4HorizontalProps> {}
