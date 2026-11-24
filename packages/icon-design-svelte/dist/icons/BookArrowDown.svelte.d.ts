import { SvelteComponent } from 'svelte';

export interface BookArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookArrowDown extends SvelteComponent<BookArrowDownProps> {}
