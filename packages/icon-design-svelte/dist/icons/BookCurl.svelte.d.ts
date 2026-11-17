import { SvelteComponent } from 'svelte';

export interface BookCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookCurl extends SvelteComponent<BookCurlProps> {}
