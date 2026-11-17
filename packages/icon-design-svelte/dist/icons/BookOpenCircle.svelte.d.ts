import { SvelteComponent } from 'svelte';

export interface BookOpenCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenCircle extends SvelteComponent<BookOpenCircleProps> {}
