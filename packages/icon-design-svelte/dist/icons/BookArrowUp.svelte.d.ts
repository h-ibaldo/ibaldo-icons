import { SvelteComponent } from 'svelte';

export interface BookArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookArrowUp extends SvelteComponent<BookArrowUpProps> {}
