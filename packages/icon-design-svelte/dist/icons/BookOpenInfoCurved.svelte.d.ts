import { SvelteComponent } from 'svelte';

export interface BookOpenInfoCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenInfoCurved extends SvelteComponent<BookOpenInfoCurvedProps> {}
