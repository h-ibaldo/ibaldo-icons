import { SvelteComponent } from 'svelte';

export interface BookmarkDotsFilledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkDotsFilled extends SvelteComponent<BookmarkDotsFilledProps> {}
