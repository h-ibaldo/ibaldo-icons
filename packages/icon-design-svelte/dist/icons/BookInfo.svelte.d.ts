import { SvelteComponent } from 'svelte';

export interface BookInfoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInfo extends SvelteComponent<BookInfoProps> {}
