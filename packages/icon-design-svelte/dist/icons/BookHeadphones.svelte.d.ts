import { SvelteComponent } from 'svelte';

export interface BookHeadphonesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookHeadphones extends SvelteComponent<BookHeadphonesProps> {}
