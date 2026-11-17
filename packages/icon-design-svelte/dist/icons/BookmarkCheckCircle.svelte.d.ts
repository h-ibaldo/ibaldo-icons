import { SvelteComponent } from 'svelte';

export interface BookmarkCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCheckCircle extends SvelteComponent<BookmarkCheckCircleProps> {}
