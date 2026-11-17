import { SvelteComponent } from 'svelte';

export interface BookInfoTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInfoTilted extends SvelteComponent<BookInfoTiltedProps> {}
