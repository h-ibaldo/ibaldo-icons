import { SvelteComponent } from 'svelte';

export interface BookKeyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookKey extends SvelteComponent<BookKeyProps> {}
