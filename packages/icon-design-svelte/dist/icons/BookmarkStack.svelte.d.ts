import { SvelteComponent } from 'svelte';

export interface BookmarkStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStack extends SvelteComponent<BookmarkStackProps> {}
