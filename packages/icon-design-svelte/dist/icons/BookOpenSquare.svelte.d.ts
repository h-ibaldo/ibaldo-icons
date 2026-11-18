import { SvelteComponent } from 'svelte';

export interface BookOpenSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenSquare extends SvelteComponent<BookOpenSquareProps> {}
