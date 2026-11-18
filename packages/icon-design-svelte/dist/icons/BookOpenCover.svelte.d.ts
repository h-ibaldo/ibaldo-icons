import { SvelteComponent } from 'svelte';

export interface BookOpenCoverProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenCover extends SvelteComponent<BookOpenCoverProps> {}
