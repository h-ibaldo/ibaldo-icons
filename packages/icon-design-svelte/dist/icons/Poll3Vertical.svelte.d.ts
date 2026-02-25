import { SvelteComponent } from 'svelte';

export interface Poll3VerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll3Vertical extends SvelteComponent<Poll3VerticalProps> {}
