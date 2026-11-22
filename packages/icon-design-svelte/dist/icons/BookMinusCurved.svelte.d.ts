import { SvelteComponent } from 'svelte';

export interface BookMinusCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookMinusCurved extends SvelteComponent<BookMinusCurvedProps> {}
