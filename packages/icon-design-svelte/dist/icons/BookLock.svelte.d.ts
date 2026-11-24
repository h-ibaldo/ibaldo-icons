import { SvelteComponent } from 'svelte';

export interface BookLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookLock extends SvelteComponent<BookLockProps> {}
