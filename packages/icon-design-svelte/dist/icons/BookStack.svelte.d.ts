import { SvelteComponent } from 'svelte';

export interface BookStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookStack extends SvelteComponent<BookStackProps> {}
