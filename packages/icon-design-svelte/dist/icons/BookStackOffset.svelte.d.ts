import { SvelteComponent } from 'svelte';

export interface BookStackOffsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookStackOffset extends SvelteComponent<BookStackOffsetProps> {}
