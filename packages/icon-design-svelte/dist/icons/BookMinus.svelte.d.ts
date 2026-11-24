import { SvelteComponent } from 'svelte';

export interface BookMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookMinus extends SvelteComponent<BookMinusProps> {}
