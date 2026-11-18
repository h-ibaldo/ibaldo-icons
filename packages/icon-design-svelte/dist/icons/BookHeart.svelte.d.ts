import { SvelteComponent } from 'svelte';

export interface BookHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookHeart extends SvelteComponent<BookHeartProps> {}
