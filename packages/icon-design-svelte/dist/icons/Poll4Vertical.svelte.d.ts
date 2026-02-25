import { SvelteComponent } from 'svelte';

export interface Poll4VerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll4Vertical extends SvelteComponent<Poll4VerticalProps> {}
