import { SvelteComponent } from 'svelte';

export interface BookPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookPlus extends SvelteComponent<BookPlusProps> {}
