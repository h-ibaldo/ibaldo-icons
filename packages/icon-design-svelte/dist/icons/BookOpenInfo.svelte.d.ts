import { SvelteComponent } from 'svelte';

export interface BookOpenInfoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenInfo extends SvelteComponent<BookOpenInfoProps> {}
