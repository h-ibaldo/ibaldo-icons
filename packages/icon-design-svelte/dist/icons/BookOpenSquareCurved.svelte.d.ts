import { SvelteComponent } from 'svelte';

export interface BookOpenSquareCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenSquareCurved extends SvelteComponent<BookOpenSquareCurvedProps> {}
