import { SvelteComponent } from 'svelte';

export interface PollHorizontalSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollHorizontalSquare extends SvelteComponent<PollHorizontalSquareProps> {}
