import { SvelteComponent } from 'svelte';

export interface BookCheckCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookCheckCurved extends SvelteComponent<BookCheckCurvedProps> {}
