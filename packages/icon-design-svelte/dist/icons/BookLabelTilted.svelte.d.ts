import { SvelteComponent } from 'svelte';

export interface BookLabelTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookLabelTilted extends SvelteComponent<BookLabelTiltedProps> {}
