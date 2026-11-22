import { SvelteComponent } from 'svelte';

export interface BookAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookAlert extends SvelteComponent<BookAlertProps> {}
