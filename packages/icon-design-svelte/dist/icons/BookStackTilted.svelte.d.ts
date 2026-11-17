import { SvelteComponent } from 'svelte';

export interface BookStackTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookStackTilted extends SvelteComponent<BookStackTiltedProps> {}
