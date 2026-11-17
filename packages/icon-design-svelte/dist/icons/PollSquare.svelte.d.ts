import { SvelteComponent } from 'svelte';

export interface PollSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollSquare extends SvelteComponent<PollSquareProps> {}
