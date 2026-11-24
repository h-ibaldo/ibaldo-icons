import { SvelteComponent } from 'svelte';

export interface BookLabelCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookLabelCurved extends SvelteComponent<BookLabelCurvedProps> {}
