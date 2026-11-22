import { SvelteComponent } from 'svelte';

export interface BookNoteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookNote extends SvelteComponent<BookNoteProps> {}
