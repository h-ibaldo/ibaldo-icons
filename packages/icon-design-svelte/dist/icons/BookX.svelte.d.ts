import { SvelteComponent } from 'svelte';

export interface BookXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookX extends SvelteComponent<BookXProps> {}
