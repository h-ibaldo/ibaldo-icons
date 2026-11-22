import { SvelteComponent } from 'svelte';

export interface BookArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookArrowRight extends SvelteComponent<BookArrowRightProps> {}
