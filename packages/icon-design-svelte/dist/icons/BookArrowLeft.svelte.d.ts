import { SvelteComponent } from 'svelte';

export interface BookArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookArrowLeft extends SvelteComponent<BookArrowLeftProps> {}
