import { SvelteComponent } from 'svelte';

export interface BookAlertCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookAlertCurved extends SvelteComponent<BookAlertCurvedProps> {}
