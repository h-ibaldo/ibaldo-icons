import { SvelteComponent } from 'svelte';

export interface Poll5VerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll5Vertical extends SvelteComponent<Poll5VerticalProps> {}
