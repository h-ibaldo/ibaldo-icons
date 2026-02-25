import { SvelteComponent } from 'svelte';

export interface Poll1HorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll1Horizontal extends SvelteComponent<Poll1HorizontalProps> {}
