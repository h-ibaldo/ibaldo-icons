import { SvelteComponent } from 'svelte';

export interface BookOpenTextProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenText extends SvelteComponent<BookOpenTextProps> {}
