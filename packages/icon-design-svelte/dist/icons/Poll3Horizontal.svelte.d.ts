import { SvelteComponent } from 'svelte';

export interface Poll3HorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll3Horizontal extends SvelteComponent<Poll3HorizontalProps> {}
