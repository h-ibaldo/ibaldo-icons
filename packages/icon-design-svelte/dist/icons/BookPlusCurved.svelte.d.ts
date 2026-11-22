import { SvelteComponent } from 'svelte';

export interface BookPlusCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookPlusCurved extends SvelteComponent<BookPlusCurvedProps> {}
