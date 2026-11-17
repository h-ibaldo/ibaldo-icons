import { SvelteComponent } from 'svelte';

export interface BookmarkThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkThree extends SvelteComponent<BookmarkThreeProps> {}
