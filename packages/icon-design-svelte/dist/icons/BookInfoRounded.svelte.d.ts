import { SvelteComponent } from 'svelte';

export interface BookInfoRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInfoRounded extends SvelteComponent<BookInfoRoundedProps> {}
