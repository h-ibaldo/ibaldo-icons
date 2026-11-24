import { SvelteComponent } from 'svelte';

export interface BookOpenBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenBare extends SvelteComponent<BookOpenBareProps> {}
