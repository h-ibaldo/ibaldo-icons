import { SvelteComponent } from 'svelte';

export interface BookOpenCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenCurved extends SvelteComponent<BookOpenCurvedProps> {}
