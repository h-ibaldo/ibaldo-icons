import { SvelteComponent } from 'svelte';

export interface BookOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpen extends SvelteComponent<BookOpenProps> {}
